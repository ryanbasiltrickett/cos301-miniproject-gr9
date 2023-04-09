import { IPost, IComment, ILike, IRecentPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PostsRepository {
  async createPost(post: IPost) {
    const flag = false;
    if (flag) {
      //add post to the follwers recentPosts array and update the lastPost timestamp accordingly
      // TODO do this after the post is added so that we have access to the postId
      const docRef = admin.firestore().collection('followers').doc(post.author);
      const newFollowersRecentPost: IRecentPost = {
        postId: post.id,
        postDescription: post.description,
        published: post.published,
        image: post.mediaUrl,
        location: post.location,
      };
      await docRef.update({
        recentPosts: admin.firestore.FieldValue.arrayUnion(
          newFollowersRecentPost
        ),
        lastPost: post.published,
      });
    }

    return await admin.firestore().collection('posts').add({
      author: post.author,
      description: post.description,
      likes: 0,
      published: post.published,
    });

    //create the new post in the posts collection
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.id)
      .create(post);
  }

  async findOne(post: IPost) {
    // return await admin.firestore().collection('posts').doc(post.id).get();
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
    return NotImplementedException;
  }

  async getPost(post: IPost) {
    return NotImplementedException;
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
