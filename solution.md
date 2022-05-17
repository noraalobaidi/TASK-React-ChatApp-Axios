## 🚪 Fetch rooms

1. Import `axios`.

```js
import axios from 'axios';
```

2. In `stores/roomStore.js` create a `fetchRooms` function ( make sure to use : async , await, try and catch )

```js
fetchRooms = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
```

3. Call our fetch rooms endpoint, store the response in `this.rooms`.

```js
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
```

4. FetchRooms should be triggered once App is rendered.

```js
const roomStore = new RoomStore();
roomStore.fetchRooms();
export default roomStore;
```

## ➕ Create a room

1. A `createRoom` function has been created in `stores/roomStore.js`
2. Add a `try catch` statement.

```js
createRoom = async (room) => {
  try {
  } catch (error) {}
};
```

3. In the `catch` code block, console log the error.

```js
createRoom = async (room) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
```

4. In the try code block, make an axios request with a `post` method to your backend's `/rooms` endpoint.

```js
createRoom = async (room) => {
  try {
    await axios.post('https://coded-task-axios-be.herokuapp.com/rooms', room);
  } catch (error) {
    console.log(error);
  }
};
```

5. Save the response of your request.

```js
createRoom = async (room) => {
  try {
    const res = await axios.post(
      'https://coded-task-axios-be.herokuapp.com/rooms',
      room
    );
  } catch (error) {
    console.log(error);
  }
};
```

6. Remember that `axios` is asynchronous, so don't forget to add `async and await`.
7. After making a request to the create route, push the new room in `res.data` to `this.rooms`.

```js
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
```

8. Delete the ID and slug generation lines of code, we don't need it anymore.

## ❌ Delete a room

1. A `deleteRoom` function has been created in `stores/roomStore.js`.
2. Add a `try catch` statement.

```js
deleteRoom = async (roomId) => {
  try {
  } catch (error) {}
};
```

3. In the `catch` code block, console log the `error`.

```js
deleteRoom = async (roomId) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
```

4. In the `try code` block, make an `axios` request with a `delete` method to your backend's `/rooms/:roomId` endpoint.

```js
deleteRoom = async (roomId) => {
  try {
    await axios.delete(
      `https://coded-task-axios-be.herokuapp.com/rooms/:roomId`
    );
  } catch (error) {
    console.log(error);
  }
};
```

5. Replace `:roomId` in the URL with the ID passed to `deleteRoom` as an argument.

```js
deleteRoom = async (roomId) => {
  try {
    await axios.delete(
      `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`
    );
  } catch (error) {
    console.log(error);
  }
};
```

6. Remember that axios is asynchronous, so don't forget to add `async and await`.
7. After making a request to the delete, don't forget to also delete the room from `this.rooms`.

```js
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
```

## 🤼‍♂️ Update a room

```js
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
```

## 🤼‍♂️ Create a msg

```js
createMsg = async (roomId, newMsg) => {
  const res = await axios.post(
    `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}`,
    newMsg
  );

  const room = this.rooms.find((room) => room.id === roomId);
  room.messages.push(res.data);
};
```
