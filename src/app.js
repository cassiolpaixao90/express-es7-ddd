module.exports = ({ server, socket }) => ({
  start: () =>
    Promise.resolve()
      .then(server.start)
      .then(socket.start)
});
