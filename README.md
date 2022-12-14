# Around the U.S. Back End  

This is a project that will teach me how to use Node.js and Express.js to create my own server and my own REST API with user authentication.

* There are no pictures yet, since I would like to add them when the project is completed to showcase its features.

* It contains the following routes:

- GET /users — returns all users;
- GET /users/:userId — returns a user by its _id;
- POST /users — create a new user;
- PATCH /users/me — updates the profile;
- PATCH /users/me/avatar — updated avatar.

- GET /cards — returns all cards from the database;
- POST /cards — creates a card with the name and link passed in the request body. Owner is set;
- DELETE /cards/:cardId — deletes a card by its _id;
- PUT /cards/:cardId/likes — likes a card;

* Custom validation with RegEx 

* Custom error handling
  
## Directories  

![Project's directories](https://pictures.s3.yandex.net/resources/Artboard_1_1600101133.png)
  
`/data` — JSON files to temporarily emulate database integration.  
  
`/routes` — routing files.  
  
All other directories are optional and may be created by the developer if necessary.   
  
## Running the Project  
  
`npm run start` — to launch the server.  
  
`npm run dev` — to launch the server with the hot reload feature.  



