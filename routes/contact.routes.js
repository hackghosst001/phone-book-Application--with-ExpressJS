import express from 'express'; 

const router = express.Router();

import {
    getContacts,addContactForm,
    saveContact,editContactForm,
    updateContact,deleteContact }  from '../controller/contacts.controller.js';

// 1. HOME: Show all contacts
router.get('/', getContacts );

// 2. CREATE (GET): Show the "Add Contact" form
router.get('/add-contact', addContactForm );

// 3. CREATE (POST): Save new contact to DB
router.post('/add',saveContact);

// 4. UPDATE (GET): Show the "Edit" form
router.get('/edit-contact/:id', editContactForm );

// 5. UPDATE (POST): Actually save the changes
router.post('/update/:id',updateContact);

// 6. DELETE (GET): Remove contact from DB
router.get('/delete-contact/:id', deleteContact );

export default router;