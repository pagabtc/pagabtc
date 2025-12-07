# PagaBTC

PagaBTC is a Bitcoin payment gateway built on top of BTCPay Server that provides a user-friendly interface for merchants to accept Bitcoin payments.

## Features

- **Payment Links**: Create payment links to send to customers via email or messaging apps
- **POS System**: Point-of-sale system for in-person transactions
- **Payment History**: View and manage all payment transactions
- **Store Management**: Manage multiple stores with separate configurations
- **Email Notifications**: Send payment links and receive notifications via email
- **Customizable Templates**: Customize email templates for payment requests
- **Multi-user Support**: Role-based access control (Owner, Admin, Operator)

## Tech Stack

### Backend
- **Runtime**: Node.js (TypeScript)
- **Framework**: Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **Security**: bcrypt for password hashing, encryption for sensitive data

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom UI components
- **QR Codes**: qrcode.react
- **Real-time**: socket.io-client

## Project Structure

```
pagabtc/
├── backend/              # Backend API
│   ├── src/              # Source code
│   │   ├── controllers/  # Request handlers
│   │   ├── middleware/   # Authentication and validation
│   │   ├── routes/       # API route definitions
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Helper functions
│   │   └── scripts/      # Utility scripts
│   ├── prisma/           # Database schema
│   ├── package.json      # Dependencies and scripts
│   └── README.md         # Backend documentation
└── frontend/             # Frontend application
    ├── src/              # Source code
    │   ├── app/          # App router pages
    │   ├── components/   # Reusable components
    │   ├── context/      # React context providers
    │   └── lib/          # Utility functions
    ├── public/           # Static assets
    ├── package.json      # Dependencies and scripts
    └── README.md         # Frontend documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- BTCPay Server instance

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Copy `.env.example` to `.env` and configure the values:
```bash
cp .env.example .env
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Initialize the database with sample data:
```bash
npm run init-db
```

6. Start the development server:
```bash
npm run dev
```

The backend will start on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on http://localhost:3001

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

## User Roles

1. **Owner (platform)**
   - View all stores
   - Create/edit/archive stores
   - Create users
   - Assign roles in stores
   - View all transactions

2. **Admin (per store)**
   - View store transactions
   - Create payment links
   - Use POS
   - Configure BTCPay settings
   - Configure branding
   - Configure email provider/templates
   - Configure notifications

3. **Operator (per store)**
   - View store transactions (read-only)
   - Use POS (create payments)
   - No access to settings, branding, email config, or user management

## Security

- Passwords are hashed using bcrypt
- Sensitive data (API keys, passwords) are encrypted before storing in the database
- JWT tokens are used for authentication
- Role-based access control for different user types

## License

This project is licensed under the MIT License.