import { CreateAuthCommand, ICreateAuthRequest } from '@mp/api/auth/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserRecord } from 'firebase-admin/auth';
import {Auth, sendPasswordResetEmail } from '@angular/fire/auth';



@Injectable()
export class AuthService {
  constructor(private commandBus: CommandBus) {}

  onAuthCreate(user: UserRecord) {
    const request: ICreateAuthRequest = { userRecord: user };
    return this.commandBus.execute(new CreateAuthCommand(request));
  }
       
  async forgotPasssword(auth: Auth, email: string): Promise<void> {
    try {
        return await sendPasswordResetEmail(auth, email);
      } catch (error) {
        console.log(error);
      throw new Error('Failed to send password reset email');
    }
  }
}




