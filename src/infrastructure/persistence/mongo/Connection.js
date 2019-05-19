const mongoose = require('mongoose');

class Connection{

    constructor({environment}){
        this.environment = environment;
    }

    tryReconect(){
        setTimeout(
            () => {
                mongoose.connect(this.environment.mongo, { useNewUrlParser: true });
            },
            5000
        );
    }

    start(){
        mongoose.connect(this.environment.mongo, { useNewUrlParser: true });
        mongoose.connection.on('error', e => {
            console.log(`db: mongodb error ${e}`, 'DB');
            this.tryReconect();
        });
        mongoose.connection.on('connected', () => {
            console.log(`db: mongodb is connected`, 'DB');
        });
        mongoose.connection.on('disconnecting', () => {
            console.log('db: mongodb is disconnecting!!!', 'DB');
        });
        mongoose.connection.on('disconnected', () => {
            console.log('db: mongodb is disconnected!!!', 'DB');
        });
        mongoose.connection.on('reconnected', () => {
            console.log(`db: mongodb is reconnected`, 'DB');
        });
        mongoose.connection.on('timeout', e => {
            console.log(`db: mongodb timeout ${e}`, 'DB');
            this.tryReconect();
        });
    }
}

module.exports = Connection;