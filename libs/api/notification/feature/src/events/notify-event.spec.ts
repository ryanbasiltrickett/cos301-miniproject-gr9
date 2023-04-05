import { NotifyEventHandler } from './notify-event.handler';
import { NotifyEventEvent, INotification, ITags} from '@mp/api/notification/util';
import { NotificationRepository } from '@mp/api/notification/data-access';

describe('NotifyEventHandler', () => {
  let handler: NotifyEventHandler;
  let repository: NotificationRepository;

  beforeEach(async () => {
    repository = new NotificationRepository();
    handler = new NotifyEventHandler(repository);
  });
    it('should return an empty array', async () => {
        const tag: ITags = {postId: "1", userId: "2"};
        const tagA: Array<ITags> = [tag];
        const eventI: INotification = {id: "test", tags: tagA, requests: ["Test1"]};
        // const eventReq: INotifyEventRequest = {notification: eventI};
        const command = new NotifyEventEvent(eventI)

        const result = await handler.handle(command);

        expect(result).toEqual([]);
    });
});