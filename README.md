# Gym Schedule Manager

**Author:** K.M.N.I.Ranasinghe - 23IT0520


## Project Structure

```
backend/
├── server.js              # Express server entry point
├── config/
│   └── db.js             # SQLite database configuration
├── dao/
│   └── userDao.js        # Data Access Object for user operations
├── routes/
│   └── authRoutes.js     # Authentication endpoints
├── services/
│   └── userService.js    # Business logic for user operations
└── public/               # Static files

database/
├── gym.db                # SQLite database file
└── schema.sql            # Database schema definitions
```

## Features Implemented

### 1. User Authentication & Management

#### User Registration
- **Endpoint:** `POST /auth/register`
- **Features:**
  - User registration with name, email, and password
  - Password hashing using bcryptjs for security
  - User profile data collection (age, gender, experience level)
  - Email uniqueness validation
  - Password minimum length validation (6 characters)
  - Returns user ID and basic info upon successful registration

#### User Login
- **Endpoint:** `POST /auth/login`
- **Features:**
  - Email and password authentication
  - Secure password verification using bcrypt
  - Returns user details without exposing password
  - Credential validation

#### User Profile Management
- **Endpoint:** `GET /auth/user/:id`
  - Retrieve user profile information by ID
  
- **Endpoint:** `PUT /auth/user/:id`
  - Update user profile (name, age, gender, experience level)
  - Returns updated user information

#### Password Management
- **Functionality:** Change password feature
  - Verifies old password before allowing change
  - Hashes new password with bcryptjs
  - Secure password update mechanism

### 2. Database Layer

#### Database Configuration (`config/db.js`)
- SQLite3 integration
- Automatic database directory creation
- Schema initialization from SQL file
- Promise-based async utilities:
  - `runAsync()` - Execute insert/update/delete queries
  - `getAsync()` - Fetch single row
  - `allAsync()` - Fetch multiple rows

#### Data Access Object (`dao/userDao.js`)
- **User Operations:**
  - `createUser()` - Create new user with profile information
  - `findUserByEmail()` - Query user by email
  - `findUserById()` - Query user by ID
  - `updateUser()` - Update user profile details
  - `updatePassword()` - Update user password securely
  - `deleteUser()` - Delete user account
  - `getAllUsers()` - Retrieve all users (admin functionality)

### 3. Business Logic

#### User Service (`services/userService.js`)
- **Registration Flow:**
  - Email duplication check
  - Secure password hashing
  - User creation via DAO
  
- **Login Flow:**
  - User lookup by email
  - Password verification
  - Secure response (no password included)

- **Profile Operations:**
  - Get user by ID
  - Update profile information
  - Change password with verification

### 4. API Routes

#### Authentication Routes (`routes/authRoutes.js`)
- `POST /auth/register` - User registration
- `POST /auth/login` - User authentication
- `GET /auth/user/:id` - Get user profile
- `PUT /auth/user/:id` - Update user profile

### 5. Database Schema

#### Users Table
- Stores user credentials and profile information
- Fields: user_id, name, email, password, age, gender, experience_level, created_at
- Email is unique
- Automatic timestamp on creation

#### Schedules Table
- Stores workout schedules for users
- Fields: schedule_id, user_id, goal, available_days, available_time, day, exercises, created_date
- Linked to users via foreign key with CASCADE delete
- Indexed for performance

#### Progress Table
- Tracks user fitness progress
- Fields: progress_id, user_id, date, weight, lift_data, notes, created_at
- Stores workout metrics and observations
- Indexed by user_id and date for efficient querying

### 6. Server Configuration

#### Express Server (`backend/server.js`)
- Port: 3000 (configurable via environment variable)
- CORS enabled for cross-origin requests
- JSON and URL-encoded request parsing
- Static file serving from public directory
- API routes:
  - `/auth` - Authentication endpoints
  - `/schedules` - Schedule management
  - `/progress` - Progress tracking
- Error handling middleware
- 404 route handler

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** SQLite3
- **Security:** bcryptjs (password hashing)
- **Middleware:** CORS, Express JSON/URL-encoded parsers

## Key Features & Best Practices

✓ **Security:**
- Password hashing with bcryptjs (salt rounds: 10)
- No passwords exposed in API responses
- Email validation and uniqueness

✓ **Database:**
- Promise-based async operations
- Parameterized queries to prevent SQL injection
- Foreign keys with cascade delete
- Indexed queries for performance
- Automatic schema initialization

✓ **Error Handling:**
- Try-catch blocks in all operations
- Descriptive error messages
- HTTP status codes (201, 400, 401, 404, 500)
- Centralized error middleware

✓ **Architecture:**
- MVC pattern (Model-View-Controller)
- DAO pattern for data access abstraction
- Service layer for business logic
- Separation of concerns

## Dependencies

```json
{
  "express": "^4.x",
  "sqlite3": "^5.x",
  "bcryptjs": "^2.x",
  "cors": "^2.x"
}
```

## Future Enhancements

- JWT authentication for stateless sessions
- Rate limiting for API endpoints
- Input validation middleware
- User role-based access control
- Password reset functionality
- Email verification
- Logging and monitoring

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```

3. Server will listen on `http://localhost:3000`

## API Usage Examples

### Register User
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "age": 25,
  "gender": "Male",
  "experienceLevel": "Intermediate"
}
```

### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get User Profile
```
GET /auth/user/1
```

### Update User Profile
```
PUT /auth/user/1
Content-Type: application/json

{
  "name": "John Doe",
  "age": 26,
  "gender": "Male",
  "experienceLevel": "Advanced"
}
```

---

**Version:** 1.0.0  
**Last Updated:** November 2025
