import fastify from 'fastify';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import { authRoutes } from './routes/authRoutes';
import { userRoutes } from './routes/userRoutes';
import { storeRoutes } from './routes/storeRoutes';
import { paymentRoutes } from './routes/paymentRoutes';
import { webhookRoutes } from './routes/webhookRoutes';

const app = fastify({ logger: true });

// Register routes
app.register(authRoutes, { prefix: '/api/auth' });
app.register(userRoutes, { prefix: '/api' });
app.register(storeRoutes, { prefix: '/api' });
app.register(paymentRoutes, { prefix: '/api' });
app.register(webhookRoutes, { prefix: '/api' });

// Root endpoint
app.get('/', async (request, reply) => {
  return { message: 'PagaBTC API is running!' };
});

// Error handling
app.setErrorHandler((error, request, reply) => {
  app.log.error(error);
  reply.status(500).send({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await app.listen({ port: Number(PORT), host: '0.0.0.0' });
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();