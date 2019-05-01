module.exports = ({ server, socket }) => {
  return {
    start: () =>
      Promise.resolve()
        .then(server.start)
        .then(socket.start)
  };
};
