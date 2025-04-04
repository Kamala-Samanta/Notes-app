# 📝 Notes App

A simple Notes App built using **Node.js, Express, and MySQL**. Users can create, view, and delete notes through a clean UI powered by REST APIs.

## 🚀 Features
- Create new notes with title and content
- View all saved notes from the database
- Expand notes to see full details
- Delete notes from the database
- Built with RESTful APIs

## 🛠 Tech Stack
- **Frontend:** EJS (Embedded JavaScript Templates), CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## 🔧 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Kamala-Samanta/Notes-app.git

2. Navigate to the project folder:
   ```sh
   cd Notes-app

3. Install dependencies:
   ```sh
   npm install

4. Configure your environment variables:

    - Create a .env file based on .env.example

    - Update database credentials
  
5. To create database:
    - Type the following in MySQL Command Line
      ```sh
      CREATE DATABASE IF NOT EXISTS notes_app;
      USE notes_app;

      CREATE TABLE IF NOT EXISTS notes (
       id INT NOT NULL AUTO_INCREMENT,
       title VARCHAR(255) NOT NULL,
      contents TEXT NOT NULL,
       created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
       PRIMARY KEY (id)
      );


7. Start the server:
   ```sh
   npm start

8. Open your browser and go to:
   - http://localhost:8011

   ---

## 📜 License
This project is open-source and available under the **MIT License**.

