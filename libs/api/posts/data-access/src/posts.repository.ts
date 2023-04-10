import { IPost, IComment, ILike, IRecentPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

@Injectable()
export class PostsRepository {
  async createPost(post: IPost) {
    //create the new post in the posts collection
    const newPost = await admin.firestore().collection('posts').add({
      author: post.author,
      description: post.description,
      likes: 0,
      published: Timestamp.now(),
      time: 0,
      image: post.mediaUrl,
      location: post.location
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
      .doc(post.id)
      .get();
  }

  async addTags(post: IPost) {
    return NotImplementedException;
  }

  async deleteTags(post: IPost) {
    return NotImplementedException;
  }

  async addComment(comment: IComment, post: IPost) {
    return NotImplementedException;
  }

  async deleteComment(comment: IComment, post: IPost) {
    return NotImplementedException;
  }

  async addLike(user: IProfile, post: IPost) {
    const like: ILike = { postId: post.id, userId: user.userId, value: 1 };
    post.likes++;

    await admin
      .firestore()
      .collection('likes')
      .doc(user.userId + '_' + post.id)
      .create(like);

    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .update({ likes: post.likes });
  }
}
