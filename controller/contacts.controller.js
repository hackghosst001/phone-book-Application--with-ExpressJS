
// importing sechema

// const Contact = require('../models/contact.model'); // old way

import Contact from '../models/contact.model.js'; // new way

export const getContacts =async (req, res) => {
    try {
        const contacts = await Contact.find(); // contacts is and array
        res.render('index', { contacts: contacts });
    } catch (err) {
        res.status(500).send("Error loading contacts: " + err.message);
    }
}

export const addContactForm = (req, res) => {
    res.render('add-contact');
}

export const saveContact =  async (req, res) => {
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
}

export const editContactForm =  async (req, res) => {
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
}

export const updateContact =  async (req, res) => {
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
}

export const deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Error deleting contact: " + err.message);
    }
}