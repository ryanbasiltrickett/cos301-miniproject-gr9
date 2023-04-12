import { CommandBus } from '@nestjs/cqrs';
import {
  INewsfeed, IgenNewsfeedResponse, IgenNewsfeedRequest,genNewsfeedEvent,
  INFPost, IupdateNFPostResponse, IupdateNFPostRequest, updateNFPostEvent
} from '@mp/api/newsfeed/util';
import { NewsfeedService } from './newsfeed.service';
import { request } from 'http';
/*
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

describe('NewsfeedService', () => {

  let commandBus : CommandBus;
  let INFPost : INFPost;
  let newsfeedService: NewsfeedService;
  let req: updateNFPostEvent;
  let reply: Promise<IupdateNFPostResponse>;

  const t = "test";

  beforeEach(() => {
      newsfeedService = new NewsfeedService(commandBus);
      INFPost.dud = t;
  });

  describe('updateNFPost', () => {
      it('should work and return the updateNFPost command',async () => {
          jest.spyOn(newsfeedService, 'updateNFPost').mockImplementation(() => reply);
          INFPost.dud = t;//something wrong here
          req = new genNewsfeedEvent(INFPost);
          expect(await newsfeedService.updateNFPost(req)).resolves.toEqual(reply);
      })
  });
});
*/
