const database = require('../database');

// Here, we are implementing the class with Singleton design pattern

class QuoteModel {
    constructor() {
        if (this.instance) return this.instance;
        QuoteModel.instance = this;
    }

    get() { return database.getList('quotes') }

    getById(id) { return database.get('quotes', id) }

    create(todo) { return database.create('quotes', todo) }

    delete(id) { return database.delete('quotes', id) }

    update(id, todo) { return database.set('quotes', id, todo) }
}

module.exports = new QuoteModel();