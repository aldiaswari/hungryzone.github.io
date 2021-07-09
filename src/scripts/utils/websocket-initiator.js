import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      name: `${restaurant.name} is on Best Restaurant!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE_URL.SMALL + restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
