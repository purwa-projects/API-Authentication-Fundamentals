# API Authentication Fundamentals

A simple Node.js and Express application demonstrating token-based API authentication using JWT and password hashing with bcrypt.

## Features

- User registration
- Password hashing with bcrypt
- User login
- JWT token generation
- Protected API route
- Token validation middleware
- JSON request/response handling
- Suitable for testing with Postman

## Setup

```bash
npm install
```

Create a `.env` file based on `.env.example`:

```env
PORT=5000
JWT_SECRET=your_long_random_secret
```

Start the server:

```bash
npm start
```

The API runs at:

`http://localhost:5000`

## API Endpoints

### Register

POST `/api/auth/register`

Body:

```json
{
  "name": "Shreyash",
  "email": "shreyash@example.com",
  "password": "Password123"
}
```

### Login

POST `/api/auth/login`

Body:

```json
{
  "email": "shreyash@example.com",
  "password": "Password123"
}
```

Copy the returned JWT token.

### Protected Profile

GET `/api/protected/profile`

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

## Security Practices Demonstrated

- Passwords are never stored as plain text.
- bcrypt is used for password hashing.
- JWT tokens have an expiration time.
- Protected routes verify tokens before allowing access.
- Secrets are stored in environment variables.
- `.env` is excluded through `.gitignore`.

## Testing

Use Postman to test registration, login, invalid credentials, missing tokens, invalid tokens, and successful access to the protected profile endpoint.
