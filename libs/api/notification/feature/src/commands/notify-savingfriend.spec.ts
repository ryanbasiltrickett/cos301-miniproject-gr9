import { Test } from '@nestjs/testing';
import { NotifySavingFriendHandler } from './notify-savingfriend.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifySavingFriendCommand, INotifySavingFriendRequest, INotification, ITags} from '@mp/api/notification/util';

describe('NotifySavingFriendHandler', () => {
  let handler: NotifySavingFriendHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        NotifySavingFriendHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<NotifySavingFriendHandler>(NotifySavingFriendHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        const eventReq: INotifySavingFriendRequest = {notification: eventI};
        const command = new NotifySavingFriendCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});