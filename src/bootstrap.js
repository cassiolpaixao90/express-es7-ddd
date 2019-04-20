class Bootstrap {
  constructor({ server }) {
    this.server = server;
    // mailer
    // notification
    // socket
    // rabbit
  }

  async start() {
    await this.server.start();
  }
}

module.exports = Bootstrap;
