import { FastifyInstance } from 'fastify';

export const paymentRoutes = async (app: FastifyInstance) => {
  // Payment routes will be implemented here
  app.get('/payments', async (request, reply) => {
    return { message: 'Get payments endpoint' };
  });

  app.post('/payments', async (request, reply) => {
    return { message: 'Create payment endpoint' };
  });
};