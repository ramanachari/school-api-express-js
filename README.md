# School API - Express.js

A RESTful School Management API built with **Node.js**, **Express.js**, and **SQL Server** using a layered architecture.

## Features

- CRUD APIs for Students
- CRUD APIs for Teachers
- CRUD APIs for Classes
- Class Details API (includes students and teachers)
- JWT Authentication
- Swagger API Documentation
- Input Validation
- Global Error Handling
- Environment-based Configuration
- Repository-Service-Controller Architecture

## Tech Stack

- Node.js
- Express.js
- SQL Server
- JWT Authentication
- Swagger (OpenAPI)
- dotenv
- mssql

## Project Structure

```text
src
│
├── config
├── controllers
├── middleware
├── models
├── repositories
├── routes
├── services
├── app.js
└── server.js
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/ramanachari/school-api-express-js.git
cd school-api-express-js
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create one of the following files in the project root:

```text
.env.dev
.env.uat
.env.prod
```

Example:

```env
PORT=3000

DB_SERVER=RAMANACHARI
DB_DATABASE=SchoolDB
DB_USER=schooluser
DB_PASSWORD=your_password
DB_PORT=1433

JWT_SECRET=YourSecretKey
JWT_EXPIRES_IN=1h
```

### Run the application

Development

```bash
npm run develop
```

UAT

```bash
npm run uat
```

Production

```bash
npm run prod
```

## API Documentation

Swagger UI

```text
http://localhost:3000/api-docs
```

Swagger JSON

```text
http://localhost:3000/swagger.json
```

## Authentication

Login endpoint:

```http
POST /api/auth/login
```

Request

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Response

```json
{
  "userId": 1,
  "username": "admin",
  "role": "Admin",
  "token": "JWT_TOKEN"
}
```

Use the returned JWT token for protected endpoints:

```http
Authorization: Bearer <JWT_TOKEN>
```

## Available APIs

### Authentication

- POST /api/auth/login

### Students

- GET /api/students
- GET /api/students/{id}
- POST /api/students
- PUT /api/students/{id}
- DELETE /api/students/{id}

### Teachers

- GET /api/teachers
- GET /api/teachers/{id}
- POST /api/teachers
- PUT /api/teachers/{id}
- DELETE /api/teachers/{id}

### Classes

- GET /api/classes
- GET /api/classes/{id}
- GET /api/classes/details/{id}
- POST /api/classes
- PUT /api/classes/{id}
- DELETE /api/classes/{id}

## Architecture

```text
Request
    │
Routes
    │
Controllers
    │
Services
    │
Repositories
    │
SQL Server
```

## Future Improvements

- Password hashing using bcrypt
- Role-based authorization
- Refresh Tokens
- Pagination
- Unit Testing
- Docker
- CI/CD Pipeline