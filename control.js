// include express module
const app = express();
// const express = require('express'); // old way

import express from 'express'; // ES6 module syntax in new way

import contactRoutes from './routes/contact.routes.js'; // Importing the routes

import { contactDB } from './config/database.js'; // Importing the database connection function from config/database.js

// no need to import dotenv module only in case of index page other necessary
// Load environment variables from .env file
const PORT = process.env.PORT;


// Starting the server
app.listen(PORT, () => {
  console.log(`Contact-App listening at http://localhost:${PORT}`);
});

// Connect to the database
contactDB(); // Calling the function to connect to MongoDB




//Added Middleware
app.set('view engine', 'ejs'); // for view (ejs files)
app.use(express.static('public')); // for static files (css, js, images)
app.use(express.urlencoded({ extended: false })); // for parsing form data

//--------------------------------------Routes----------------------------------------------//

app.use('/', contactRoutes); // Using the imported routes      



//------------------------------------------------------------------------------------------//