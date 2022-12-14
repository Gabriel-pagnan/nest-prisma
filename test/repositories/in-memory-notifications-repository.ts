import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
    implements NotificationsRepository 
{
    public notification: Notification[] = [];

    async create(notification: Notification){
        this.notification.push(notification)
    }
}