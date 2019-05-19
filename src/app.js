module.exports = ({server, socket, mongo}) => ({
    start: () =>
        Promise.resolve()
            .then(server.start)
            .then(socket.start)
});
