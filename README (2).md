# Gym Schedule Manager

A comprehensive web-based fitness management system designed to help users create personalized workout schedules, track progress, and visualize their fitness journey.

## Author

**M.A.B.S.L.Marasinghe - 23IT0505**

## Project Overview

Gym Schedule Manager is a full-stack web application that provides gym members with the ability to generate personalized workout plans based on their fitness goals, experience levels, and available time. The system includes user authentication, progress tracking, and advanced analytics features.

## Features Implemented

### 1. **User Authentication**
   - User registration with comprehensive profile creation
   - Email-based login system
   - Password validation (minimum 6 characters)
   - Profile information collection (name, email, age, gender, experience level)
   - Secure local authentication with localStorage

### 2. **Home Page (Landing Page)**
   - Professional hero section with call-to-action buttons
   - Feature showcase highlighting system capabilities:
     - **Personalized Plans**: Tailored workout schedules
     - **Progress Tracking**: Monitor weight and strength gains
     - **Visual Analytics**: Interactive charts for fitness journey visualization
     - **Multiple Goals**: Support for muscle gain, fat loss, strength, and endurance training
   - Responsive navigation bar with quick links
   - Professional footer with project attribution

### 3. **User Registration**
   - Full name input
   - Email address registration
   - Secure password creation with confirmation
   - Optional profile information:
     - Age (13-100 years)
     - Gender selection
   - Experience level selection:
     - Beginner (0-1 year)
     - Intermediate (1-3 years)
     - Advanced (3+ years)
   - Form validation with error handling
   - Success notifications

### 4. **Login System**
   - Email and password authentication
   - Error message display for failed login attempts
   - User data persistence using localStorage
   - Automatic redirect to dashboard on successful login

### 5. **Dashboard**
   - Personalized welcome message with user's name
   - Key fitness statistics display:
     - Number of workout plans
     - Progress entries count
     - Current weight tracking
     - Weight change calculation
   - Quick action cards for easy navigation:
     - Generate New Plan
     - View Schedule
     - Log Progress
     - View Analytics
   - User profile summary displaying:
     - Email
     - Age
     - Gender
     - Experience Level
   - Logout functionality

### 6. **Responsive Design**
   - Mobile-first approach with breakpoints at 768px and 480px
   - Flexible grid layouts using CSS Grid
   - Adaptive navigation menu
   - Touch-friendly button sizes and spacing
   - Responsive forms and card layouts

### 7. **UI/UX Components**
   - Modern color scheme with primary green (#4CAF50) and blue (#2196F3) accents
   - Consistent button styles (primary, secondary, block, large variants)
   - Alert components for error and success messages
   - Card-based layout system
   - Smooth transitions and hover effects
   - Shadow effects for depth perception
   - Icon emoji integration for visual appeal

### 8. **Form Management**
   - Comprehensive form validation
   - Password confirmation matching
   - Multi-field registration form
   - Form grouping and sections
   - Real-time field focus states
   - Input type validation

### 9. **Navigation System**
   - Sticky navigation bar
   - Active page indicators
   - Quick navigation to all major sections
   - Logout functionality from authenticated pages
   - Breadcrumb-style navigation

## Project Structure

```
public/
├── index.html           # Landing page with feature showcase
├── login.html          # User login page
├── register.html       # User registration page
├── dashboard.html      # User dashboard with statistics
├── css/
│   └── style.css       # Comprehensive styling for all pages
└── js/
    └── main.js         # JavaScript functionality (referenced)
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js (referenced in footer)
- **Database**: SQLite (referenced in footer)
- **Architecture**: Client-Server with REST API integration
- **Styling**: Custom CSS with CSS variables and Grid/Flexbox layouts
- **Client-side Storage**: localStorage for session management

## Key Styling Features

- **CSS Variables**: Centralized color scheme management
- **Responsive Grid**: Mobile-friendly layouts
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper color contrast and semantic HTML
- **Modern Design**: Card-based UI with subtle shadows
- **Professional Typography**: Segoe UI with proper font hierarchy

## API Integration Points

The application is designed to integrate with backend APIs:
- `/auth/login` - User login endpoint
- `/auth/register` - User registration endpoint
- `/schedules/user/{userId}` - Fetch user's workout schedules
- `/progress/stats/{userId}` - Fetch user's progress statistics

## Additional Features Referenced

The system is designed to support the following additional features (frontend structure in place):
- **Schedule/Plan Generation** (generator.html)
- **Workout Schedule Display** (plan.html)
- **Progress Logging** (progress.html)
- **Analytics Charts** (charts.html)
- **Data Visualization** with progress charts and statistics

## User Experience Flow

1. **Landing** → User arrives at home page
2. **Registration** → New users create account with profile information
3. **Login** → Existing users authenticate with email/password
4. **Dashboard** → View statistics and quick actions
5. **Generate Plan** → Create personalized workout schedule
6. **Track Progress** → Log workouts and measurements
7. **View Analytics** → Visualize fitness journey

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation & Setup

1. Extract the project files
2. Install backend dependencies (Node.js, Express, SQLite)
3. Set up the database with user and fitness tracking tables
4. Configure and run the Express server
5. Open the application in a web browser

## Notes

- This is a University Project (CA1 + CA2)
- Developed with emphasis on clean code, responsive design, and user experience
- All pages are fully responsive and mobile-optimized
- Client-side validation included for security and UX
- localStorage used for session management

---

**Version**: 1.0  
**Last Updated**: November 2025  
**Project Status**: Frontend Implementation Complete
