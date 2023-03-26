import { IPost } from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PostsRepository {
    async createPost(post : IPost){
        return await admin
        .firestore()
        .collection('posts')
        .doc(post.id)
        .create(post);
    }
}