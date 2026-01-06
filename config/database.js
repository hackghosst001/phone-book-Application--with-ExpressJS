// include mongoose module

// const mongoose = require('mongoose'); // mongooese package importing old way
import mongoose from 'mongoose'; // mongooese package importing new way

// include dotenv module to load environment variables
import dotenv from 'dotenv';
dotenv.config();
// due to this url is stored in( process.env.MONGO_URL)

const DB=process.env.MONGO_URL; // storing the mongoDB URL from .env file in a variable

 // connect to MongoDB & connection checking

export const contactDB = () => {
    mongoose.connect(DB) 
        .then(() => {
            console.log(`Connected to MongoDB at ${DB}`);
            console.log('Good to go! -> Anshu Raj');
        })
        .catch(err => {
            console.error(`Could not connect to ${DB}`, err);
        });
};