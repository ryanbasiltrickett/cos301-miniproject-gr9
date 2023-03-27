import { EventsService } from './events.service';
import { CommandBus } from '@nestjs/cqrs';
import { IEvent, IEventResponse, GenerateEventEvent } from '@mp/api/events/util';
import { request } from 'http';

describe('EventsService', () => {
    let eventService: EventsService;
    let cBus: CommandBus;
    let param: IEvent;
    let request: GenerateEventEvent;
    let result: Promise<IEventResponse>;

    beforeEach(() => {
        eventService = new EventsService(cBus);
    });

    describe('generateEvent', () => {
        it('should return a GenerateEventCommand',async () => {
            jest.spyOn(eventService, 'generateEvent').mockImplementation(() => result);
            param.eventId = "test";
            request = new GenerateEventEvent(param);
            expect(await eventService.generateEvent(request));
        })
    });
});

