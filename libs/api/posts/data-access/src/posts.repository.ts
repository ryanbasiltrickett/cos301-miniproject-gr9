import { IEvent } from '@mp/api/events/util';
import { IPost, IComment, ILike, IRecentPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';

interface IIds{
  id: string;
}

@Injectable()
export class PostsRepository {
  async createPost(post: IPost) {
    //create the new post in the posts collection
    const newPost = await admin.firestore().collection('posts').add({
      author: post.author,
      authorId: post.authorId,
      description: post.description,
      likes: 0,
      published: Timestamp.now(),
      time: 0,
      image: post.mediaUrl,
      location: post.location,
      comments: post.comments
    });

    const events = await admin.firestore().collection('events').doc(post.authorId!).collection('active-events')
    .where('eventTitle', '==', 'Post now').get();


    const eventIds: string [] = [];
    const eventData = events.docs.map((doc) => doc.data() as IEvent);
    events.docs.forEach(doc => {
      eventIds.push(doc.id);
    })

    let index = 0;
    eventData.forEach((event) => {
      if(event.date.toDate().getDate() === Timestamp.now().toDate().getDate()){
        console.log("Welldone event completed");
        admin.firestore().collection('events').doc(post.authorId!).collection('active-events').doc(eventIds[index]).delete();
        admin.firestore().collection('users').doc(post.authorId!).update('timeLeft', FieldValue.increment(300));
        return;
      }
      index++;
    });

    //get data from the new post
    const newPostData = (await newPost.get()).data();
    await newPost.update({id: newPost.id});
    //add post to the follwers recentPosts array and update the lastPost timestamp accordingly
    const docRef = admin.firestore().collection('followers').doc(post.author);
    const newFollowersRecentPost: IRecentPost = {
      postId: newPostData!['id'],
      postDescription: post.description,
      published: newPostData!['published'],
      image: post.mediaUrl,
      location: post.location,
    };

    await docRef.update({
      recentPosts: admin.firestore.FieldValue.arrayUnion(
        newFollowersRecentPost
      ),
      lastPost: newFollowersRecentPost.published,
    });

    return newPost;
  }

  async findOne(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .withConverter<IPost>({
        fromFirestore: (snapshot) => {
          const snapshotData = snapshot.data();
          const data = {
            id: snapshot.id,
            ...snapshotData,
          };
          return data as IPost;
        },
        toFirestore: (it: IPost) => it,
      })
      .doc(post.id)
      .get();
  }

  async findPost(postId: string) {
    return await admin
      .firestore()
      .collection('posts')
      .withConverter<IPost>({
        fromFirestore: (snapshot) => {
          const snapshotData = snapshot.data();
          const data = {
            id: snapshot.id,
            ...snapshotData,
          };
          return data as IPost;
        },
        toFirestore: (it: IPost) => it,
      })
      .doc(postId)
      .get();
  }


  async updatePost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .set(post, { merge: true });
  }

  async deletePost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .delete();
  }

  async getPost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .where('author', "==", post.author)
      .where('published', "==", post.published)
      .get();
  }

  async addTags(post: IPost) {
    return NotImplementedException;
  }

  async deleteTags(post: IPost) {
    return NotImplementedException;
  }

  async addComment(comment: IComment, post: IPost) {
/*   const comment: IComment = {userId: user.userId, text: //comment text};

    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ comments: post.comments });
*/
    return NotImplementedException;
  }

  async deleteComment(comment: IComment, post: IPost) {
    /*return await admin
      .firestore()
      .collection('posts')
      .doc(post.id.)
      //.delete();*/
    return NotImplementedException;
  }

  async addLike(user: IProfile, post: IPost) {
    const like: ILike = { postId: post.id, userId: user.id, value: 1 };
    post.likes++;

    await admin
      .firestore()
      .collection('likes')
      .doc(user.id + '_' + post.id)
      .create(like);

    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ likes: post.likes });
  }

  async removeLike(user: IProfile, post: IPost){
    post.likes--;

    await admin
      .firestore()
      .collection('likes')
      .doc(user.id + '_' + post.id)
      .delete();

    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ like: post.likes });
  }
}
