"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookRoutes = void 0;
const webhookRoutes = async (app) => {
    app.post('/webhooks/btcpay', async (request, reply) => {
        return { message: 'BTCPay webhook endpoint' };
    });
};
exports.webhookRoutes = webhookRoutes;
//# sourceMappingURL=webhookRoutes.js.map