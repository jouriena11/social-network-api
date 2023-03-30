const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tutor'; // 'socialMediaDB' database with this name does not already exist, it will be created automatically when the connection is established for the first time.

connect(connectionString, {
    useNewUrlParser: true, // enables the use of the new MongoDB connection string parser. This is necessary to use the new connection string format introduced in MongoDB 3.0.
    useUnifiedTopology: true, // enables the use of the new Server Discovery and Monitoring engine. This is necessary to use the new MongoDB driver features for replica sets and sharded clusters.
});

module.exports = connection;