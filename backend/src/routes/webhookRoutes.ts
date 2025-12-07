import { FastifyInstance } from 'fastify';

export const webhookRoutes = async (app: FastifyInstance) => {
  // Webhook routes will be implemented here
  app.post('/webhooks/btcpay', async (request, reply) => {
    return { message: 'BTCPay webhook endpoint' };
  });
};