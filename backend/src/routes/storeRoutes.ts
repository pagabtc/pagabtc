import { FastifyInstance } from 'fastify';

export const storeRoutes = async (app: FastifyInstance) => {
  // Store management routes will be implemented here
  app.get('/stores', async (request, reply) => {
    return { message: 'Get stores endpoint' };
  });

  app.post('/stores', async (request, reply) => {
    return { message: 'Create store endpoint' };
  });
};