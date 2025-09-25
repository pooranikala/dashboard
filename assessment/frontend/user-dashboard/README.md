# Dashboard Assessment Project

This project is a **Dashboard Application** with a **frontend** built using **React** and a **backend** built using **Node.js (Express)**.  

The frontend uses **Bootstrap** for styling and **MUI icons** for UI components.  
The backend uses **Express** and **CORS** to handle API requests.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- Git (optional, if cloning from GitHub)

---

## Project Structure

assessment/
├─ frontend/ # React frontend
│ ├─ public/
│ ├─ src/
│ └─ package.json
└─ backend/ # Node.js backend
├─ index.js
└─ package.json

---

## Backend Setup

1. Open a terminal in the backend folder:

```bash
cd backend

2.Install dependencies:

npm init
npm install express
npm install cors

3.Start the backend server:

node index.js

The server will run at http://localhost:5000

API endpoint example:

GET http://localhost:5000/api/users

## Frontend Setup

1.Open a terminal in the frontend folder:

cd frontend

2.Install dependencies:

npx create-react-app app-name
npm install
npm install bootstrap
npm install @mui/icons-material

3.Start the frontend:

npm start
The app will run at http://localhost:3000

## Running the Project

Start the backend first (node index.js)

Then start the frontend (npm start)

Open http://localhost:3000
 in your browser
