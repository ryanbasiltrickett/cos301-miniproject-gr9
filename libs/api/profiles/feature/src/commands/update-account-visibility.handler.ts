import { ProfilesRepository } from '@mp/api/profiles/data-access';
import {
    IUpdateAccountVisibilityResponse,
    UpdateAccountVisibilityCommand
} from '@mp/api/profiles/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Profile } from '../models';

@CommandHandler(UpdateAccountVisibilityCommand)
export class UpdateAccountVisibilityHandler
  implements
    ICommandHandler<UpdateAccountVisibilityCommand, IUpdateAccountVisibilityResponse>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: ProfilesRepository
  ) {}

  async execute(command: UpdateAccountVisibilityCommand) {
    console.log(`${UpdateAccountVisibilityHandler.name}`);

    /* Your code goes here*/
  }
}
