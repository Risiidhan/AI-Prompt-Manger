This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Full Stack Next.js CRUD App with Google Authentication

This is a full stack application built with Next.js for the frontend, MongoDB for the database, and NextAuth for Google authentication. It allows users to sign in with their Google account, create prompts, edit, delete, and view their profile to see all their prompts. The application uses TypeScript for type safety and Tailwind CSS for styling:

- Create a .env file in the root directory of the project.
Add the following environment variables to the .env file:

```bash
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
DB_URI=your_mongodb_connection_uri

```


### Features
- **Google Authentication**: Users can sign in using their Google account.
- **CRUD Operations**: Users can create, read, update, and delete prompts.
- **Profile Page**: Users can view their profile to see all their prompts.
- **Copy prompt**: Users can copy the prompt

### Tech Stack
- **Front ent**: Next.js, React, TypeScript, Tailwind CSS
- **Back end**: Node.js, MongoDB, Mongoose
- **Authentication**: NextAuth for Google authentication

### Project Structure
- **pages/**: Contains Next.js pages for different routes.
- **components/**: Contains reusable React components.
- **api/**: Contains backend API routes.
- **models/**: Contains Mongoose models for MongoDB.
- **styles/**: Contains Tailwind CSS styles.
- **utils/**: Contains utility functions.

To get started with the project, follow these steps:

### Installation

First, install all dependencies using npm:

```bash
npm install
```

Run in local environment using npm:

```bash
npm run dev
```