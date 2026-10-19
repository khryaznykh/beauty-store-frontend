# Beauty Store — E-Commerce Web Application

A full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, and Node.js).

The project includes product browsing, shopping cart functionality, user authentication, customer reviews, and account management features.

The application is designed with reusable React components, responsive layouts, and REST API integration.

## Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- Vite
- React Router
- Redux Toolkit and RTK Query
- React Context API
- React Hook Form
- SCSS Modules
- Lucide React
- Swiper.js

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- REST API

### Deployment
- Netlify — frontend
- Render — backend
- MongoDB Atlas — database

## Authentication and Authorization

Authentication is implemented using **JWT-based authentication**, React Context API, and browser cookies.

### How authentication works

1. Users sign in using their email and password.
2. The backend verifies their credentials and returns a JWT access token.
3. The frontend stores the token in a cookie using `js-cookie`.
4. React Context manages the authentication state through a custom `AuthProvider` and `useAuth()` hook.
5. The `jwt-decode` library checks the token's expiration time on the frontend.
6. RTK Query automatically attaches the JWT to authenticated API requests using the `Authorization: Bearer <token>` header.
7. Express authentication middleware verifies the JWT signature and expiration before allowing access to protected endpoints.
8. Users are logged out when the token expires or the backend rejects an authenticated session.

### Authentication features
- User registration and sign-in
- JWT access-token authentication
- Password hashing with bcrypt
- Persistent login state across page refreshes while the token remains valid
- Automatic logout on JWT expiration
- Protected backend API endpoints
- Authentication-aware navigation
- Account dropdown with different options for guests and authenticated users

**Security note:** The current implementation stores the JWT in a JavaScript-accessible cookie. A future improvement is migrating to backend-managed HttpOnly cookies.

## Features

### Implemented
- Product listing and individual product detail pages
- Shopping cart functionality
- User registration and sign-in
- JWT authentication and logout
- React Context-based authentication state
- Account dropdown menu
- Product review interface
- REST API integration using RTK Query
- Form validation using React Hook Form
- Reusable UI components
- Client-side routing

### In Progress / Requires Further Testing
- Displaying authenticated user profile information consistently
- Customer review submission and moderation workflow
- Editing and deleting personal reviews
- Admin review management
- Role-based access control across admin functionality
- Clearing user-specific cached data after logout
- Mobile-friendly account dropdown interaction

### Planned Improvements
- Improved authentication security using HttpOnly cookies
- More complete error handling and user feedback
- Additional automated tests
- Accessibility improvements
- Further responsive design refinements

## Project Structure

The frontend follows a modular, feature-oriented structure.

Key areas include:

- `app/` — application setup, routing, and providers
- `features/` — authentication and other feature-specific logic
- `widgets/` — larger reusable page sections
- `shared/` — reusable UI components, utilities, and authentication context
- `pages/` — application pages

## Running Locally

### Prerequisites
- Node.js
- npm
- A running backend API

### Installation

Clone the frontend repository:

```bash
git clone https://github.com/khryaznykh/beauty-store-frontend.git
cd beauty-store-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8000
```

Start the development server:

```bash
npm run dev
```

The frontend will connect to the configured backend API.

## Repositories

**Frontend:** https://github.com/khryaznykh/beauty-store-frontend

**Backend:** https://github.com/khryaznykh/beauty-store-backend

## Current Project Status

## Planned Features / Roadmap

The Beauty Store application is actively being developed. Upcoming improvements include:

- **Admin Dashboard** — Dedicated admin pages for managing products, users, customer reviews, and store operations.
- **Stripe Payment Integration** — Secure checkout and online payment processing using Stripe.
- **Enhanced User Profiles** — Additional account management features, including editing personal information, viewing order history, and managing account settings.
- **Order Management** — Order tracking, purchase history, and order status updates.
- **Authentication Improvements** — Enhanced session management and more secure token storage.
- **UI/UX Improvements** — Additional responsive design improvements, accessibility enhancements, and mobile-friendly navigation.

### Project Status

🚧 **Active Development**

Core e-commerce functionality and JWT-based authentication have been implemented. Admin management, Stripe checkout, and expanded user account features are planned for future development.
The application is an ongoing portfolio project demonstrating full-stack JavaScript development, API integration, authentication, reusable React components, and state management.
