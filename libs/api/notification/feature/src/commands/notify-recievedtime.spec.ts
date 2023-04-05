import { Test } from '@nestjs/testing';
import { NotifyRecievedTimeHandler } from './notify-recievedtime.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifyRecievedTimeCommand, INotifyRecievedTimeRequest, INotification, ITags} from '@mp/api/notification/util';

describe('NotifyRecievedTimeHandler', () => {
  let handler: NotifyRecievedTimeHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        NotifyRecievedTimeHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<NotifyRecievedTimeHandler>(NotifyRecievedTimeHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        const eventReq: INotifyRecievedTimeRequest = {notification: eventI};
        const command = new NotifyRecievedTimeCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});