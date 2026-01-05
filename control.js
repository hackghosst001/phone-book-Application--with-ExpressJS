// include express module
const express = require('express');
const app = express();
const port = 3000;

// Starting the server
app.listen(port, () => {
  console.log(`Contact-App listening at http://localhost:${port}`);
});


// include mongoose module
const mongoose = require('mongoose'); // mongooese package importing

    // connect to MongoDB & connection checking
    mongoose.connect('mongodb://127.0.0.1:27017/my_contact') 
      .then(() => console.log('Connected to MongoDB at mongodb://127.0.0.1:27017/'),
                    console.log('Good to go!->Anshu Raj'))
      .catch(err => console.error('Could not connect to MongoDB...', err));

// importing sechema
const Contact = require('./models/contact.model');

//Added Middleware
app.set('view engine', 'ejs'); // for view (ejs files)
app.use(express.static('public')); // for static files (css, js, images)
app.use(express.urlencoded({ extended: false })); // for parsing form data

//--------------------------------------Routes----------------------------------------------//

// 1. HOME: Show all contacts
app.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find(); // contacts is and array
        res.render('index', { contacts: contacts });
    } catch (err) {
        res.status(500).send("Error loading contacts: " + err.message);
    }
});

// 2. CREATE (GET): Show the "Add Contact" form
app.get('/add-contact', (req, res) => {
    res.render('add-contact');
});

// 3. CREATE (POST): Save new contact to DB
app.post('/add', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            phone: req.body.phone
        });
        await newContact.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Error saving contact: " + err.message);
    }
});

// 4. UPDATE (GET): Show the "Edit" form
app.get('/edit-contact/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).send("Contact not found");
        }
        // Make sure the filename 'update-contact' matches your .ejs file name exactly
        res.render('update-contact', { contact: contact });
    } catch (err) {
        res.status(500).send("Error fetching contact: " + err.message);
    }
});

// 5. UPDATE (POST): Actually save the changes
app.post('/update/:id', async (req, res) => {
    try {
        const { name, phone } = req.body; // Destructure for cleaner code
        await Contact.findByIdAndUpdate(req.params.id, {
            name: name,
            phone: phone
        });
        res.redirect('/'); // Go back to the main list
    } catch (err) {
        res.status(500).send("Error updating contact: " + err.message);
    }
});

// 6. DELETE (GET): Remove contact from DB
app.get('/delete-contact/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Error deleting contact: " + err.message);
    }
});