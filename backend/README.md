# PagaBTC Backend

This is the backend API for PagaBTC, a Bitcoin payment gateway built on top of BTCPay Server.

## Tech Stack

- **Runtime**: Node.js (TypeScript)
- **Framework**: Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **Security**: bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- BTCPay Server instance

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Copy `.env.example` to `.env` and configure the values:
```bash
cp .env.example .env
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Initialize the database with sample data:
```bash
npm run init-db
```

5. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Stores
- `POST /api/stores` - Create a new store (Owner only)
- `GET /api/stores` - Get all stores
- `GET /api/stores/:storeId` - Get a specific store
- `PATCH /api/stores/:storeId` - Update a store
- `DELETE /api/stores/:storeId` - Archive a store (Owner only)

### Users
- `GET /api/stores/:storeId/users` - Get users for a store
- `POST /api/stores/:storeId/users` - Add user to a store
- `PATCH /api/stores/:storeId/users/:userId` - Update user role in a store

### Payments
- `POST /api/stores/:storeId/payments` - Create a new payment
- `GET /api/stores/:storeId/payments` - Get payments for a store
- `GET /api/payments/:publicId` - Get a specific payment (public)
- `GET /api/payments/:publicId/status` - Get payment status (public)

### Webhooks
- `POST /api/webhooks/btcpay` - BTCPay Server webhook

## Project Structure

```
src/
├── controllers/     # Request handlers
├── middleware/      # Authentication and validation middleware
├── models/          # Database models (Prisma generated)
├── routes/          # API route definitions
├── scripts/         # Utility scripts
├── services/        # Business logic
└── utils/           # Helper functions
```

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `JWT_EXPIRES_IN` - JWT token expiration time
- `PORT` - Server port (default: 3000)
- `ENCRYPTION_SECRET` - Secret key for encrypting sensitive data
- `BTCPAY_URL` - BTCPay Server URL
- `FRONTEND_URL` - Frontend application URL

## Security

- Passwords are hashed using bcrypt
- Sensitive data (API keys, passwords) are encrypted before storing in the database
- JWT tokens are used for authentication
- Role-based access control for different user types (Owner, Admin, Operator)

## License

This project is licensed under the MIT License.