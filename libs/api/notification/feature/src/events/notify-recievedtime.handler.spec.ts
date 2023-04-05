import { NotifyRecievedTimeHandler } from './notify-recievedtime.handler';
import { NotifyRecievedTimeEvent, INotification, ITags} from '@mp/api/notification/util';
import { NotificationRepository } from '@mp/api/notification/data-access';

describe('NotifyRecievedTimeHandler', () => {
  let handler: NotifyRecievedTimeHandler;
  let repository: NotificationRepository;

  beforeEach(async () => {
    repository = new NotificationRepository();
    handler = new NotifyRecievedTimeHandler(repository);
  });
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        // const eventReq: INotifyEventRequest = {notification: eventI};
        const command = new NotifyRecievedTimeEvent(eventI)

        const result = await handler.handle(command);

        expect(result).toEqual([]);
    });
});