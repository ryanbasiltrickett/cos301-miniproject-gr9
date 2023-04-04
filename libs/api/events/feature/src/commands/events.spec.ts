import { Test } from '@nestjs/testing';
import { GenerateEventHandler } from './generate-event.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { GenerateEventCommand, IEventRequest, IEvent} from '@mp/api/events/util';

describe('GenerateEventHandler', () => {
  let handler: GenerateEventHandler;
  let publisher: EventPublisher;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GenerateEventHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
      ],
    }).compile();

    handler = moduleRef.get<GenerateEventHandler>(GenerateEventHandler);
    publisher = moduleRef.get<EventPublisher>(EventPublisher);
  });

  describe('execute()', () => {
    it('should return an empty array', async () => {
        const eventI: IEvent = {eventId: "test"};
        const eventReq: IEventRequest = {event: eventI};
        const command = new GenerateEventCommand(eventReq)

        const result = await handler.execute(command);

        expect(result).toEqual([]);
    });
  });
});