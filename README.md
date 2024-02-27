# IIM-Website-Backend

## Tech Stack

- Node.js : We are using Node.js as our server-side runtime environment. Javascript compilation is done by V8 engine.
- Express.js : We are using Express.js as our server-side framework. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- MongoDB : We are using MongoDB as our database. MongoDB is a NoSQL database program, which uses JSON-like documents with optional schemas.
- Mongoose : We are using Mongoose as our ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straight-forward, schema-based solution to model your application data.
- Zod : We are using Zod as our data validation library. It is a TypeScript-first schema declaration and validation library.

## Project Structure

```
.
├── src/
│   ├── config/
│   │   └── db.ts                # Database configuration
│   ├── controllers/
│   │   └── Controllers.ts      # Controllers handling route logic
│   ├── models/
│   │   └── models.ts           # Data models (Mongoose schemas)
│   ├── routes/
│   │   ├── adminRoutes.ts      # Route definitions for admin-related endpoints
│   │   └── userRoutes.ts       # Route definitions for user-related endpoints
│   ├── app.ts                  # Entry point of the application
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── package.json                # Node.js dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation

```

## Setup

## Development Logs

Find the development logs [here](./DevelopmentLogs.md)
