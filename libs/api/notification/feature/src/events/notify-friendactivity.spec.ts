import { NotifyFriendActivityHandler } from './notify-friendactivity.handler';
import { NotifyFriendActivityEvent, INotification, ITags} from '@mp/api/notification/util';
import { NotificationRepository } from '@mp/api/notification/data-access';

describe('NotifyFriendActivityHandler', () => {
  let handler: NotifyFriendActivityHandler;
  let repository: NotificationRepository;

  beforeEach(async () => {
    repository = new NotificationRepository();
    handler = new NotifyFriendActivityHandler(repository);
  });
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        // const eventReq: INotifyEventRequest = {notification: eventI};
        const command = new NotifyFriendActivityEvent(eventI)

        const result = await handler.handle(command);

        expect(result).toEqual([]);
    });
});