import { CommandBus } from '@nestjs/cqrs';
import { INewsfeed, IgenNewsfeedResponse, IgenNewsfeedRequest,genNewsfeedEvent} from '@mp/api/newsfeed/util';
import { NewsfeedService } from './newsfeed.service';
import { request } from 'http';

describe('NewsfeedService', () => {

    let commandBus : CommandBus;
    let INewsfeed : INewsfeed;
    let newsfeedService: NewsfeedService;
    let req: genNewsfeedEvent;
    let reply: Promise<IgenNewsfeedResponse>;

    const t = "test";

    beforeEach(() => {
        newsfeedService = new NewsfeedService(commandBus);
        INewsfeed.dud = t;
    });

    describe('genNewsfeed', () => {
        it('should work and return the genNewsfeed command',async () => {
            jest.spyOn(newsfeedService, 'genNewsfeed').mockImplementation(() => reply);
            INewsfeed.dud = t;//something wrong here
            req = new genNewsfeedEvent(INewsfeed);
            expect(await newsfeedService.genNewsfeed(req)).resolves.toEqual(reply);
        })
    });
});
