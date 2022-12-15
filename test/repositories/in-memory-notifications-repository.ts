import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
    implements NotificationsRepository 
{
    public notification: Notification[] = [];

    async create(notification: Notification){
        this.notification.push(notification)
    }
}