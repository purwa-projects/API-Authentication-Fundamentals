# API Authentication Fundamentals — Report

## 1. Introduction

API authentication verifies the identity of a client before allowing access to protected resources. It is important because APIs commonly handle user accounts, private information, and application data.

## 2. Token-Based Authentication

In token-based authentication, a user first logs in with valid credentials. The server generates a token, and the client sends that token with later requests.

This project uses JSON Web Tokens (JWT).

## 3. OAuth

OAuth is an authorization framework commonly used when an application needs controlled access to resources on behalf of a user without directly handling the user's password.

Examples include signing in with third-party identity providers and granting applications limited access to accounts.

## 4. Implementation

The project uses:
- Node.js
- Express.js
- JWT
- bcrypt
- dotenv
- Postman for API testing

The application provides registration, login, and a protected profile endpoint.

## 5. Security Best Practices

- Hash passwords instead of storing plaintext passwords.
- Use strong secrets and environment variables.
- Set token expiration times.
- Validate authentication headers.
- Return appropriate HTTP status codes.
- Never commit `.env` files or secrets to GitHub.
- Use HTTPS in production.

## 6. Conclusion

API authentication is a fundamental part of secure application development. JWT provides a practical way to authenticate API requests, while bcrypt protects stored passwords. The project demonstrates the complete basic flow from registration and login to accessing a protected API resource.
