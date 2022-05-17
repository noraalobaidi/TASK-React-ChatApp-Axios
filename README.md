## First things first:

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-React-MobX-Chatting-Website) to your `development folder
2. `npm install`
3. `npm start`

## 🚪 Fetch rooms

1. Import `axios`.
2. In `stores/roomStore.js` create a `fetchRooms` function.
3. Add a `try catch` statement.
4. In the `catch` code block, console log the error.
5. Call our fetch rooms endpoint, store the response in `this.rooms`.
6. Remember that `axios` is asynchronous, so don't forget to add `async and await`.
7. FetchRooms should be triggered once App is rendered.

## ➕ Create a room

1. A `createRoom` function has been created in `stores/roomStore.js`
2. Add a `try catch` statement.
3. In the `catch` code block, console log the error.
4. In the try code block, make an axios request with a `post` method to your backend's `/rooms` endpoint.
5. Save the response of your request.
6. Remember that `axios` is asynchronous, so don't forget to add `async and await`.
7. After making a request to the create route, push the new room in `res.data` to `this.rooms`.
8. Delete the ID and slug generation lines of code, we don't need it anymore.

## ❌ Delete a room

1. A `deleteRoom` function has been created in `stores/roomStore.js`.
2. Add a `try catch` statement.
3. In the `catch` code block, console log the `error`.
4. In the `try code` block, make an `axios` request with a `delete` method to your backend's `/rooms/:roomId` endpoint.
5. Replace `:roomId` in the URL with the ID passed to `deleteRoom` as an argument.
6. Remember that axios is asynchronous, so don't forget to add `async and await`.
7. After making a request to the delete, don't forget to also delete the room from `this.rooms`.

# 🤼‍♂️ Challenge

- Use the updateRoom function and endpoint to update a room.
- Create a function called `createMsg` and use the endpoint for creating a message.

## here are all the APIs

| Title           | Method   | Endpoint                                                        | Data required                   |
| --------------- | -------- | --------------------------------------------------------------- | ------------------------------- |
| Fetch all rooms | `GET`    | `https://coded-task-axios-be.herokuapp.com/rooms`               |                                 |
| Create a room   | `POST`   | `https://coded-task-axios-be.herokuapp.com/rooms`               | `title`, `image`, `description` |
| Update a room   | `PUT`    | `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`     | `title`, `image`, `description` |
| Delete a room   | `DELETE` | `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`     |                                 |
| Create a msg    | `POST`   | `https://coded-task-axios-be.herokuapp.com/rooms/msg/${roomId}` | `msg`                           |
