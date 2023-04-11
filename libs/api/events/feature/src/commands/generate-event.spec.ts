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

        const [time, event] = result;
        const [hours, minutes] = time.split(":");
    
        expect(parseInt(hours, 10)).toBeGreaterThanOrEqual(8);
        expect(parseInt(hours, 10)).toBeLessThanOrEqual(23);
        expect(parseInt(minutes, 10)).toBeGreaterThanOrEqual(0);
        expect(parseInt(minutes, 10)).toBeLessThanOrEqual(59);
        expect(event).toMatch(/Post now|Tag a friend in a post|Send a frind a message|Follow someone new|Like posts|Give some time to someone you might think need it/);
    });
  });
});