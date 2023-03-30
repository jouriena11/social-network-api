const { ObjectId } = require('mongoose').Types;
const { User, Thoughts } = require('../models');

const friendCount = async () => 
    User.aggregate() // aggregate() function is used to perform complex data analysis and manipulations on the documents in a collection, e.g. grouping, filtering, sorting, and transforming data in MongoDB.
        .count('friendCount')
        .then((numberOfFriends) => numberOfFriends);
