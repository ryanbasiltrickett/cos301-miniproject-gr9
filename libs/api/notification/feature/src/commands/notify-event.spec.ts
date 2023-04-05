import { Test } from '@nestjs/testing';
import { NotifyEventHandler } from './notify-event.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifyEventCommand, INotifyEventRequest, INotification, ITags} from '@mp/api/notification/util';

describe('NotifyEventHandler', () => {
  let handler: NotifyEventHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        NotifyEventHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<NotifyEventHandler>(NotifyEventHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        const eventReq: INotifyEventRequest = {notification: eventI};
        const command = new NotifyEventCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});