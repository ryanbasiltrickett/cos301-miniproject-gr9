import { Test } from '@nestjs/testing';
import { NotifyEventHandler } from './notify-event.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { NotifyEventCommand, IEventRequest, IEvent} from '@mp/api/events/util';

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
        const eventI: IEvent = {eventId: "test"};
        const eventReq: IEventRequest = {event: eventI};
        const command = new NotifyEventCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});