class UserRepository {
    constructor({providerFactory}) {
        this.providerFactory = providerFactory;
    }

    async save(data, db) {
        const User = await this.providerFactory.getUserModel(db);
        await User.save(data);
    }

    async getUser() {

    }

    async getAll() {

    }

    async update() {

    }

    async delete() {

    }

}

module.exports = UserRepository;