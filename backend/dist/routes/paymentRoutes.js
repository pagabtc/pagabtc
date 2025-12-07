"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const paymentRoutes = async (app) => {
    app.get('/payments', async (request, reply) => {
        return { message: 'Get payments endpoint' };
    });
    app.post('/payments', async (request, reply) => {
        return { message: 'Create payment endpoint' };
    });
};
exports.paymentRoutes = paymentRoutes;
//# sourceMappingURL=paymentRoutes.js.map