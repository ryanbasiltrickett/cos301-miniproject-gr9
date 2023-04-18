import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IGetUser } from '@mp/api/browse/util';
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
        .get();
        // .then((snapshot) => {
        //     snapshot.forEach((doc) => {
        //         const data = doc.data();
        //         console.log(data);
        //     });
        // })

        const data = users.docs.map((doc) => doc.data() as IUser);
        // const 
        console.log(data);
    }
}