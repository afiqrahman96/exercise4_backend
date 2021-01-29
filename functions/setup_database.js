const db = require('./api/database')

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ['users', 'quotes']
    collections.forEach(async (collection) => await deleteCollection(collection))

    // Add documents to the todos collection
    addDocuments(
        'quotes',
        [
            { data: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important', like: 0, dislike: 0 },
            { data: 'You cant separate peace from freedom because no one can be at peace unless he has his freedom', like: 0, dislike: 0 },
            { data: 'Learning never exhausts the mind', like: 0, dislike: 0 },
            { data: 'When you are courting a nice girl an hour seems like a second. When you sit on a red hot cinder a second seems like an hour . That is relatively', like: 0, dislike: 0 },
            { data: 'it is fine to celebrate success but it is more important to heed the lessons of failure', like: 0, dislike: 0 },
        ]
    )

    res.send('Setting Up Database.... Done ')
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection)
    const docs = await cref.listDocuments()
    docs.forEach((doc) => doc.delete())
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase