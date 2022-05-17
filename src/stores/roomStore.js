import { makeObservable, observable, action } from 'mobx';
import slugify from 'react-slugify';
class RoomStore {
  rooms = [
    {
      image:
        'https://mk0peerspaceres622pi.kinstacdn.com/wp-content/uploads/Eco-Friendly-Executive-Boardroom-santa-monica-la-los-angeles-rental-1200x600.jpg',
      id: 1,
      title: 'Meeting room',
      description: 'Only people invited for the meeting!',
      slug: 'meeting-room',
      messages: [
        {
          msg: 'Hi Hacker, How are you?',
        },
        {
          msg: 'I am fine.',
        },
      ],
    },
  ];

  constructor() {
    makeObservable(this, {
      rooms: observable,
      createRoom: action,
      updateRoom: action,
      deleteRoom: action,
      createMsg: action,
    });
  }

  createRoom = (room) => {
    room.id = this.rooms[this.rooms.length - 1].id + 1;
    room.slug = slugify(room.title);
    this.rooms.push(room);
  };

  deleteRoom = (roomId) => {
    this.rooms = this.rooms.filter((room) => room.id !== roomId);
  };
  createMsg = (roomId, msg) => {
    const room = this.rooms.find((_room) => _room.id === +roomId);
    room.messages.push(msg);
  };

  updateRoom = (updatedRoom) => {
    const room = this.rooms.find((room) => room.id === updatedRoom.id);
    room.title = updatedRoom.title;
    room.description = updatedRoom.description;
    room.image = updatedRoom.image;
  };
}

const roomStore = new RoomStore();
export default roomStore;
