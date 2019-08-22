export interface NotificationModel {
  name: string;
  notificationsType: {
      system: boolean;
      push: boolean;
      email: boolean;
    };
    notifications : [];
}

export class Notification {
  name: string;
  notificationsType: {
    system: boolean;
    push: boolean;
    email: boolean;
  };
  notifications : [];

  constructor(name: string, notificationsType:{system: boolean;push: boolean;email: boolean},notifications:[]) {
    this.name = name;
    this.notificationsType = notificationsType;
    this.notifications = notifications;
  }
}