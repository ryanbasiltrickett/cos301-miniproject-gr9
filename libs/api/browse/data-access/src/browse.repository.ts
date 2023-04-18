import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IGetUser, IGetUserResponse } from '@mp/api/browse/util';
import { IUser} from '@mp/api/users/util';
import { where } from '@firebase/firestore';


@Injectable()
export class BrowseRepository{
    async getUser(user: IGetUser){
        console.log(user.id);
        const db = admin.firestore();
        const users = await db.collection('users')
        .where('email', '>=',  user.id)
        .where('email', '<', user.id + '\uf8ff')
        .limit(5)
        .get();

        const data = users.docs.map((doc) => doc.data() as IUser);
        // const 
        // let foundUsers: IGetUserResponse[];
        // data.forEach(user => {
        //     console.log(user.displayName);
        // });
        return data;
    }
}