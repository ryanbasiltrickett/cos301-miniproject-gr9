import {
    INotifyEventRequest,
    INotifyEventResponse,
    NotifyEventCommand,
    INotifySavingFriendRequest,
    INotifySavingFriendResponse,
    NotifySavingFriendCommand,
    INotifyLowTimeRequest,
    INotifyLowTimeResponse,
    NotifyLowTimeCommand,
    INotifyFriendActivityRequest,
    INotifyFriendActivityResponse,
    NotifyFriendActivityCommand,
    INotifyRecievedTimeRequest,
    INotifyRecievedTimeResponse,
    NotifyRecievedTimeCommand
} from '@mp/api/notification/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class ProfilesService {
  constructor(private readonly commandBus: CommandBus) {}

  async notifyEvent(
    request: INotifyEventRequest
  ): Promise<INotifyEventResponse> {
    return await this.commandBus.execute<
      NotifyEventCommand,
      INotifyEventResponse
    >(new NotifyEventCommand(request));
  }

  async notifySavingFriend(
    request: INotifySavingFriendRequest
  ): Promise<INotifySavingFriendResponse> {
    return await this.commandBus.execute<
        NotifySavingFriendCommand,
        INotifySavingFriendResponse
    >(new NotifySavingFriendCommand(request));
  }

  async notifyLowTime(
    request: INotifyLowTimeRequest
  ): Promise<INotifyLowTimeResponse> {
    return await this.commandBus.execute<
        NotifyLowTimeCommand,
        INotifyLowTimeResponse
    >(new NotifyLowTimeCommand(request));
  }
  
  async notifyFriendActivity(
    request: INotifyFriendActivityRequest
  ): Promise<INotifyFriendActivityResponse> {
    return await this.commandBus.execute<
        NotifyFriendActivityCommand,
        INotifyFriendActivityResponse
    >(new NotifyFriendActivityCommand(request));
  } 

  async notifyRecievedTime(
    request: INotifyRecievedTimeRequest
  ): Promise<INotifyRecievedTimeResponse> {
    return await this.commandBus.execute<
        NotifyRecievedTimeCommand,
        INotifyRecievedTimeResponse
    >(new NotifyRecievedTimeCommand(request));
  }  
}
