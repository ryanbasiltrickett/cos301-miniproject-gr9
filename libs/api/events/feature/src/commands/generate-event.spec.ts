import { Test } from '@nestjs/testing';
import { GenerateEventHandler } from './generate-event.handler';
import { EventPublisher } from '@nestjs/cqrs';
import { GenerateEventCommand } from '@mp/api/events/util';
import { Timestamp } from 'firebase-admin/firestore';
import { EventsRepository } from '@mp/api/events/data-access';

describe('GenerateEventHandler', () => {
  let handler: GenerateEventHandler;
  let mockRepository: any;
  beforeEach(async () => {
    mockRepository = {
      addEvent: jest.fn(),
    };
    const moduleRef = await Test.createTestingModule({
      providers: [
        GenerateEventHandler,
        {
          provide: EventPublisher,
          useValue: {
            mergeObjectContext: jest.fn(),
          },
        },
        { provide: EventsRepository, useValue: mockRepository },
      ],
    }).compile();

    handler = moduleRef.get<GenerateEventHandler>(GenerateEventHandler);
  });

  describe('execute', () => {
    it('should generate and add an event to the repository', async () => {
      const request = {
        currTime: new Date(),
        user: 'testuser',
      };

      const command = new GenerateEventCommand(request);
      const response = await handler.execute(command);

      expect(mockRepository.addEvent).toHaveBeenCalledWith(
        {
          event: [
            {
              eventTitle: 'Post now',
              eventTime: expect.stringMatching(/^\d{2}:\d{2}$/),
              user: 'testuser',
              date: expect.any(Timestamp),
            },
          ],
        },
        'testuser',
      );

      expect(response).toEqual({
        event: [
          {
            eventTitle: 'Post now',
            eventTime: expect.stringMatching(/^\d{2}:\d{2}$/),
            user: 'testuser',
            date: expect.any(Timestamp),
          },
        ],
      });
    });
  });
});