# CHATGPT-REVIEW-API-FULL-STACK

This project contains both the **Frontend** and **Backend** of the Review API. The **Backend** is built with **Node.js** and **Express.js**, while the **Frontend** is developed with **React.js**. This guide will walk you through setting up both the backend and frontend locally, and also setting up the Supabase URL for database and authentication.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
  - [Install Dependencies](#install-backend-dependencies)
  - [Environment Variables](#backend-environment-variables)
  - [Running the Backend](#running-the-backend)
- [Frontend Setup](#frontend-setup)
  - [Install Dependencies](#install-frontend-dependencies)
  - [Running the Frontend](#running-the-frontend)
- [Supabase Setup](#supabase-setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - Comes with Node.js.
- **Git** - [Download Git](https://git-scm.com/)

To verify if Node.js and npm are installed, run:

```bash
node -v
npm -v
Backend Setup
Install Backend Dependencies
Clone the repository:


git clone https://github.com/your-username/review-api.git
cd review-api
Install the required dependencies for the backend:


npm install
Backend Environment Variables
Set up a .env file in the root directory for the backend (same level as server.js). Add the following environment variable:


SUPABASE_URL=<Your Supabase URL>
Replace <Your Supabase URL> with the actual URL from your Supabase project.

Running the Backend
Start the backend server in development mode:


npm run dev
The backend will be running at http://localhost:5000 (or the port you specified).

Frontend Setup
Install Frontend Dependencies
Navigate to the client directory:


cd client
Install the required dependencies for the frontend:


npm install
Running the Frontend
Start the React development server:


npm run dev
The frontend will be running at http://localhost:3000.

Ensure that both the backend and frontend are running simultaneously for the full application to work.

Supabase Setup
Go to Supabase and create a new project.

After creating the project, you'll get a Supabase URL. This URL will be used in your backend to connect to your Supabase database.

You do not need an API key for direct database access when you use Supabase URL in combination with row-level security (RLS) or client-side authentication. Make sure you configure RLS policies in your Supabase dashboard to manage database access and security.

You can create tables in Supabase for storing reviews, users, and any other necessary data.

Example of creating a reviews table in Supabase:

Go to the Table Editor in Supabase.

Create a table called reviews with fields like id, title, body, rating, and user_id.

API Endpoints
The Review API exposes the following endpoints:

GET /reviews: Fetch all reviews.

POST /reviews: Add a new review.

GET /reviews/:id: Get a review by its ID.

PUT /reviews/:id: Update a review by its ID.

DELETE /reviews/:id: Delete a review by its ID.
