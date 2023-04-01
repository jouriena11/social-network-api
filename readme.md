# **Social Media API**

## **Project Description**
The purpose of this project is to build an API for a social media application, where users can do the following:
- create, update, and delete their user account
- share their thoughts (i.e. similar to Facebook post), update their thoughts (i.e. edit), and delete their thoughts
- add friends to their friend list
- react to their friends' thoughts (i.e. similar to Facebook comments).

Data is to be stored in MongoDB, and Mongoose is used to interact with the database.

**BONUS** 
A thought(s) associated with a user record will also be deleted from the Thought collection upon deleting the user record

---
## **URLs**
- [Walkthrough Video](https://drive.google.com/file/d/1O6Qbo5nWQt4yXQ1igLqaa9TReb5YaLKy/view?usp=share_link)
- [GitHub Repository URL](https://github.com/jouriena11/social-network-api)

---
## **Table of Contents**
- <a href="#installation">Installation</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#usage">Usage</a>
- <a href="#future-development">Future Developments</a>

---
## **Installation**
The following npm libraries must be installed to run this application:
- express v4.18.2
- mongoose v6.9.2
- nodemon v2.0.22 (optional)

The installations can be done conveniently by the running the following command line at the root directory: 
```
npm i
```

Please note that while nodemon is used in the talkthrough not included in the walkthrough video, so please make sure to manually install the library if you want to use nodemon.

---
## **Technologies Used**
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose library
- Insomnia

---
## **Usage**
Before testing the API routes in Insomnia, run the following command in your command-line interface of choice:

```
node server
```

or 
```
nodemon server
```

To test the API routes, please use the following endpoints:

* User and Friend
    * GET all users: `/api/users`
    * GET a user by userId: `/api/users/:userId`
    * POST (create) a new user: `/api/users`
    * PUT (update) a user by userId: `/api/users/:userId`
    * DELETE a user by userId: `/api/users/:userId`
    * POST add friend to a user: `/api/users/:userId/friends/:friendId` (Note: `friendId` is another userId)
    * DELETE a friend from a user's friend list: `api/users/:userId/friends/:fiendId`

* Thought and Reaction
    * GET all thoughts: `/api/thoughts`
    * GET a thought by thoughtId: `/api/thoughts/:thoughtId`
    * POST (create) a new thought: `/api/thoughts`
    * PUT (update) a thought by thoughtId: `/api/thoughts/:thoughtId`
    * DELETE a thought by thoughtId: `/api/thoughts/:thoughtId`
    * POST add a reaction to a thought: `/api/thoughts/:thoughtId/reactions`
    * DELETE a reaction from a thought's reactions array: `/api/thoughts/:thoughtId/reactions/:reactionId` (Note: a reactionId is a different property from the _id; please make sure to use the reactionId in this DELETE request)

---
## **Future Development**
- to include password in User model
- to use userId instead of username (despite the username being set to 'unique')
- to consider having a Friend model as a junction table, connecting the User model and Friends for scalability and better performance, instead of self-referencing.