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
    it('should send a notification', async () => {
      const command = new NotifyEventCommand({
        event: {
          eventTitle: "Test Event",
          eventTime: new Date(),
        },
      });
  
      const result = await handler.execute(command);
  
      expect(result.notification.title).toEqual("Its time for Timeshare");
      expect(result.notification.body).toEqual("Test Event");
      expect(result.topic).toEqual("all");
    });
  });
});