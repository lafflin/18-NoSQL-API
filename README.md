# Module 18 Challenge

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
  ​

## Overview

This weeks challenge was create a Social Media API using express and mongoose
​

### The challenge

Create a social media API from scratch using express and mongoose

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Links

- Solution URL: [Solution](https://github.com/lafflin/18-NoSQL-API)
- Video: [YouTube](https://www.youtube.com/watch?v=SGP1W4zjNGk)
  ​

## My process

1. Firstly, I wrote out the server, connection, models, and schemas.
2. Secondly, while working on the controllers and routing, I had requested help from the askBCS, and realized that I needed to refactor most of my code, because it was creating more issues that intended.
3. After refactoring, I began to knock out all of the routes slowly.
4. Finally, I made the video and finished the README.

### Built with

- Express.js
- Moment.js
- Mongoose
- MongoDB

### What I learned

- I learned a lot about MongoDB and how it works with express.

### Continued development

- Continue to work more with MongoDB and mongoose

### Useful resources

- The mongoDB docs were hugely helpful

## Author

- Linkedin - [Max McLaughlin](https://www.linkedin.com/in/max-mcla/)

## Acknowledgments

- The LA who realized I needed to refactor my code and let me know. Saved me a huge amount of time by pointing me in the right direction.
