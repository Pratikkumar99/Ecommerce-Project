# MERN E-commerce Backend

A fully functional REST API backend for an e-commerce application with user authentication, product management, cart functionality, and order processing.

## Features

- **User Authentication**: Signup and login with JWT tokens
- **Product Management**: CRUD operations for products
- **Shopping Cart**: Add, remove, and update cart items
- **Order Processing**: Place orders and manage order status
- **Address Management**: Save and retrieve user addresses
- **Database**: MongoDB with Mongoose ODM
- **Security**: Password hashing with bcryptjs

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env`:
```env
MONGO_URI=mongodb://localhost:27017/mern-ecom
JWT_SECRET=your-secret-key
PORT=5001
```

4. Start the server:
```bash
npm start
```

## Database Seeding

To populate the database with sample products:

```bash
npm run seed
```

This will add 12 sample products across different categories.

## API Endpoints

### Authentication

#### Signup
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Products

#### Get All Products
```http
GET /api/products
```

Query parameters:
- `search`: Search by product title
- `category`: Filter by category

#### Create Product
```http
POST /api/products/add
Content-Type: application/json

{
  "title": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "image": "image-url",
  "stock": 50
}
```

#### Update Product
```http
PUT /api/products/update/:id
Content-Type: application/json

{
  "title": "Updated Product Name",
  "price": 149.99
}
```

#### Delete Product
```http
DELETE /api/products/delete/:id
```

### Cart

#### Add to Cart
```http
POST /api/cart/add
Content-Type: application/json

{
  "userId": "user-id",
  "productId": "product-id"
}
```

#### Remove from Cart
```http
POST /api/cart/remove
Content-Type: application/json

{
  "userId": "user-id",
  "productId": "product-id"
}
```

#### Update Quantity
```http
POST /api/cart/update
Content-Type: application/json

{
  "userId": "user-id",
  "productId": "product-id",
  "quantity": 3
}
```

#### Get Cart
```http
GET /api/cart/:userId
```

### Orders

#### Place Order
```http
POST /api/order/place
Content-Type: application/json

{
  "userId": "user-id",
  "address": {
    "fullName": "John Doe",
    "phone": "1234567890",
    "addressLine": "123 Main St",
    "city": "New York",
    "state": "NY",
    "pincode": "10001"
  }
}
```

#### Get User Orders
```http
GET /api/order/user/:userId
```

#### Get Order by ID
```http
GET /api/order/:id
```

#### Update Order Status
```http
PUT /api/order/:id/status
Content-Type: application/json

{
  "status": "Shipped"
}
```

### Address

#### Save Address
```http
POST /api/address/add
Content-Type: application/json

{
  "userId": "user-id",
  "fullName": "John Doe",
  "phone": "1234567890",
  "addressLine": "123 Main St",
  "city": "New York",
  "state": "NY",
  "pincode": "10001"
}
```

#### Get User Addresses
```http
GET /api/address/:userId
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── productController.js # Product CRUD operations
│   ├── cartController.js  # Cart management
│   ├── orderController.js # Order processing
│   └── addressController.js # Address management
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── User.js            # User schema
│   ├── product.js         # Product schema
│   ├── Cart.js            # Cart schema
│   ├── Order.js           # Order schema
│   └── Address.js         # Address schema
├── routes/
│   ├── authRoutes.js      # Auth endpoints
│   ├── productsRoutes.js  # Product endpoints
│   ├── cart.js            # Cart endpoints
│   ├── order.js           # Order endpoints
│   └── address.js         # Address endpoints
├── seed.js                # Database seeding script
├── server.js              # Main server file
├── .env                   # Environment variables
├── package.json           # Dependencies
└── README.md             # This file
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm run seed` - Seed database with sample products

## Environment Variables

- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation
- `PORT` - Server port (default: 5001)

## Authentication Middleware

Protected routes can use the authentication middleware:

```javascript
import { authMiddleware } from './middleware/auth.js';

router.get('/protected', authMiddleware, (req, res) => {
    // Access user ID via req.user.id
});
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Development

The server runs on port 5001 by default. Make sure MongoDB is running locally before starting the server.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## License

ISC
