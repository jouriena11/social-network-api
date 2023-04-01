# **Social Media API**

## **Project Description**
The purpose of this project is to build an API for a social media application, where users can do the following:
- create, update, and delete their user account
- share their thoughts (i.e. similar to Facebook post), update their thoughts (i.e. edit), and delete their thoughts
- add friends to their friend list
- react to their friends' thoughts (i.e. similar to Facebook comments).

Data is to be stored in MongoDB, and Mongoose is used to interact with the database.

---
## **URLs**
- [Walkthrough Video]()
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

The installations can be done conveniently by the running the following command line at the root directory: 
```
npm i
```

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


---
## **Future Development**
- to include password in User model
- to use userId instead of username (despite the username being set to 'unique')
- to consider having a Friend model as a junction table, connecting the User model and Friends for scalability and better performance, instead of self-referencing.