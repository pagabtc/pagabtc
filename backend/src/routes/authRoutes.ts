import { FastifyInstance } from 'fastify';

export const authRoutes = async (app: FastifyInstance) => {
  // Authentication routes will be implemented here
  app.post('/register', async (request, reply) => {
    return { message: 'Register endpoint' };
  });

  app.post('/login', async (request, reply) => {
    return { message: 'Login endpoint' };
  });
};