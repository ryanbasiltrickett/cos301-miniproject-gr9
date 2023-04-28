import { EventsService } from './events.service';
import { CommandBus } from '@nestjs/cqrs';
import { IEvent, IEventResponse, GenerateEventEvent,
    NotifyEventEvent } from '@mp/api/events/util';
import { request } from 'http';

describe('EventsService', () => {
    let eventService: EventsService;
    let cBus: CommandBus;
    let param: IEvent;
    let request1: GenerateEventEvent;
    let request2: NotifyEventEvent;
    let result: Promise<IEventResponse>;

    beforeEach(() => {
        eventService = new EventsService(cBus);
    });

    describe('generateEvent', () => {
        it('should return a GenerateEventCommand',async () => {
            jest.spyOn(eventService, 'generateEvent').mockImplementation(() => result);
            param.eventId = "test";
            request1 = new GenerateEventEvent(param);
            expect(await eventService.generateEvent(request1)).resolves.toEqual(result);
        })
    });

    describe('notifyAboutEvent', () => {
        it('should return a NotifyEventCommand',async () => {
            jest.spyOn(eventService, 'notifyAboutEvent').mockImplementation(() => result);
            param.eventId = "test";
            request2 = new NotifyEventEvent(param);
            expect(await eventService.notifyAboutEvent(request2)).resolves.toEqual(result);
        })
    });
});

