# My REST API

A RESTful API with JWT authentication built with Node.js and Express.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-rest-api.git
   ```

2. Install dependencies:
   ```bash
   cd my-rest-api
   npm install
   ```

3. Create a `.env` file and add your environment variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Register User

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Login User

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Get User Data (Protected)

- **URL:** `/api/users`
- **Method:** `GET`
- **Headers:**
  ```json
  {
    "x-auth-token": "your_jwt_token"
  }
  ```
