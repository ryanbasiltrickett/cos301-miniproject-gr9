import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IGetPost, IGetUser, IGetUserResponse } from '@mp/api/browse/util';
import { IUser} from '@mp/api/users/util';
import { where } from '@firebase/firestore';


@Injectable()
export class BrowseRepository{
    async getUser(user: IGetUser){
        console.log(user.id);
        if(user.id.length != 0){
            const db = admin.firestore();
            const users = await db.collection('users')
            .where('username', '>=',  user.id)
            .where('username', '<', user.id + '\uf8ff')
            .limit(5)
            .get();

            const data = users.docs.map((doc) => doc.data() as IUser);
            return data;            
        } else {
            return null;
        }
    }

    async getTrending(){
        const db = admin.firestore();
        console.log('In Browse Repo');
        const posts = await db.collection('posts')
        .where('time', '>', 50)
        .limit(8)
        .get();
        // console.log(posts);
        const postData = posts.docs.map((doc) => doc.data() as IGetPost);
        // console.log(postData);
        return postData;
    }
}