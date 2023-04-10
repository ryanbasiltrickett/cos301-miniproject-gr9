import { IAuth, UpdateAuthCommand } from '@mp/api/auth/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Auth } from '../models';

@CommandHandler(UpdateAuthCommand)
export class UpdateAuthHandler implements ICommandHandler<UpdateAuthCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: UpdateAuthCommand) {
    console.log(`${UpdateAuthHandler.name}`);

    const request = command.request;
    const data: IAuth = {
      id: request.auth.id,
      email: request.auth.email,
      username: request.auth.username,
      photoURL: request.auth.photoURL,
      bio: request.auth.bio,
      private: request.auth.private,
      password: request.auth.password,
      created: Timestamp.fromDate(new Date()),
    };
    const auth = this.publisher.mergeObjectContext(Auth.fromData(data));

    auth.update();
    auth.commit();
  }
}
