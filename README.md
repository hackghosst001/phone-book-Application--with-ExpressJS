### 📱 Phone Book Manager
**A simple, full-stack web application to manage your contacts.** 
**Built with the MERN stack logic (specifically using Node.js, Express, MongoDB, and EJS).**

### 📝 Author
    BY-Anshu Raj

----------------------------------------------------------------------------------------------------------------------

### 🚀 Features
**View Contacts:** See a list of all saved names and phone numbers in a clean table.

**Add Contact:** Save new contact details to a MongoDB database.

**Edit Contact:** Update existing names or phone numbers.

**Delete Contact:** Remove contacts with a confirmation prompt.

**Responsive Design:** Styled with custom CSS for a modern look.

----------------------------------------------------------------------------------------------------------------------

### 🛠️ Tech Stack
**Backend:** Node.js, Express.js

**Database:** MongoDB (via Mongoose)

**View Engine:** EJS (Embedded JavaScript)

**Styling:** Custom CSS (Static files)

----------------------------------------------------------------------------------------------------------------------

### ⚙️ Prerequisites

**Node.js installed on your machine.**

**MongoDB installed and running locally on mongodb://127.0.0.1:27017/.**

----------------------------------------------------------------------------------------------------------------------

### 📥 Installation & Setup

**1.Clone or create the directory:**

        mkdir phone-book
        cd phone-book

**2.Initialize and install dependencies:**

        npm init -y
        npm install express mongoose ejs

**3.Configure the database: Ensure your local MongoDB service is running.**
  **The app will automatically create the my_contact database.**

**4.Run the application:**

        npm run dev -> check script section of package.json file

**5.Access the app: Open your browser and navigate to http://localhost:3000.**

----------------------------------------------------------------------------------------------------------------------

### 🛣️ API Routes
| Method   |        Route          |               Description                  |
|----------| --------------------  | ------------------------------------------ |
| **GET**  | `/index`              | All contacts                               |
| **GET**  | `/add-contact`        | Shows the Add Contact form                 |
| **POST** | `/add`                | Saves a new contact to DB                  |
| **GET**  | `/edit-contact/:id`   | Shows the Edit form for a specific contact |
| **POST** | `/update/:id`         | Saves changes to an existing contact       |
| **GET**  | `/delete-contact/:id` | Removes a contact from the DB              |

----------------------------------------------------------------------------------------------------------------------

### 📂 Project Structure

```text
phone-book/
  ├── models/
  │   └── contact.model.js   # Mongoose Schema
  ├── public/
  │   └── style.css          # Custom Styling
  ├── views/
  │   ├── index.ejs          # Main List Page
  │   ├── add-contact.ejs    # Create Form
  │   └── update-contact.ejs # Edit Form
  ├── control.js             # Main Server File
  └── package.json           # Dependencies

