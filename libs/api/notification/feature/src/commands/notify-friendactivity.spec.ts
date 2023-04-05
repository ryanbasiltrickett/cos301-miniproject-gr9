import { Test } from '@nestjs/testing';
import { NotifyFriendActivityHandler } from './notify-friendactivity.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifyFriendActivityCommand, INotifyFriendActivityRequest, INotification, ITags} from '@mp/api/notification/util';

describe('NotifyFriendActivityHandler', () => {
  let handler: NotifyFriendActivityHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        NotifyFriendActivityHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<NotifyFriendActivityHandler>(NotifyFriendActivityHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const FriendActivityI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        const FriendActivityReq: INotifyFriendActivityRequest = {notification: FriendActivityI};
        const command = new NotifyFriendActivityCommand(FriendActivityReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});