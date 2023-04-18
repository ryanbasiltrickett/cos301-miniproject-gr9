import { Injectable, NotImplementedException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IGetUser } from '@mp/api/browse/util';

@Injectable()
export class BrowseRepository{
    async getUser(user: IGetUser){
        return NotImplementedException
    }
}