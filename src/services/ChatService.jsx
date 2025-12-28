export const sendMessage = (socket, message) => {
    socket.send(JSON.stringify(message))
};