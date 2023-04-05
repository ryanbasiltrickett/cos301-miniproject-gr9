import { NotifyLowTimeHandler } from './notify-lowtime.handler';
import { NotifyLowTimeEvent, INotification, ITags} from '@mp/api/notification/util';
import { NotificationRepository } from '@mp/api/notification/data-access';

describe('NotifyLowTimeHandler', () => {
  let handler: NotifyLowTimeHandler;
  let repository: NotificationRepository;

  beforeEach(async () => {
    repository = new NotificationRepository();
    handler = new NotifyLowTimeHandler(repository);
  });
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        // const eventReq: INotifyEventRequest = {notification: eventI};
        const command = new NotifyLowTimeEvent(eventI)

        const result = await handler.handle(command);

        expect(result).toEqual([]);
    });
});