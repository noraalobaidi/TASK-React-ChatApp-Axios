import { makeObservable, observable, action } from 'mobx';

import axios from 'axios';

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
      fetchRooms: action,
    });
  }

  fetchRooms = async () => {
    try {
      const res = await axios.get(
        'https://coded-task-axios-be.herokuapp.com/rooms'
      );
      this.rooms = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  createRoom = async (room) => {
    try {
      const res = await axios.post(
        'https://coded-task-axios-be.herokuapp.com/rooms',
        room
      );
      this.rooms.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteRoom = async (roomId) => {
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`
      );
      this.rooms = this.rooms.filter((room) => room.id !== roomId);
    } catch (error) {
      console.log(error);
    }
  };

  createMsg = (roomId, msg) => {
    const room = this.rooms.find((_room) => _room.id === +roomId);
    room.messages.push(msg);
  };

  updateRoom = async (updatedRoom) => {
    try {
      const res = await axios.put(
        `https://coded-task-axios-be.herokuapp.com/rooms/${updatedRoom.id}`,
        updatedRoom
      );
      this.rooms = this.rooms.map((room) =>
        room.id === updatedRoom.id ? res.data : room
      );
    } catch (error) {
      console.log(error);
    }
  };

  createMsg = async (roomId, newMsg) => {
    const res = await axios.post(
      `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
      newMsg
    );

    const room = this.rooms.find((room) => room.id === roomId);
    room.messages.push(res.data);
  };
}

const roomStore = new RoomStore();
roomStore.fetchRooms();
export default roomStore;
