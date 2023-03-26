import { IPost, IComment } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
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

    async addTags(post : IPost){
        return NotImplementedException;
    }

    async addComment(comment : IComment, post : IPost){
        return NotImplementedException;
    }
    

    async addLike(user : IProfile, post : IPost){
        return NotImplementedException;
    }
}