import { Test } from '@nestjs/testing';
import { NotifyLowTimeHandler } from './notify-lowtime.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifyFriendActivityCommand, INotifyFriendActivityRequest, INotification, ITags} from '@mp/api/notification/util';

describe('NotifyLowTimeHandler', () => {
  let handler: NotifyLowTimeHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        NotifyLowTimeHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<NotifyLowTimeHandler>(NotifyLowTimeHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        const eventReq: INotifyFriendActivityRequest = {notification: eventI};
        const command = new NotifyFriendActivityCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});