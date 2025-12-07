import { FastifyInstance } from 'fastify';

export const userRoutes = async (app: FastifyInstance) => {
  // User management routes will be implemented here
  app.get('/users', async (request, reply) => {
    return { message: 'Get users endpoint' };
  });
};