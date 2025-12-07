"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRoutes = void 0;
const storeRoutes = async (app) => {
    app.get('/stores', async (request, reply) => {
        return { message: 'Get stores endpoint' };
    });
    app.post('/stores', async (request, reply) => {
        return { message: 'Create store endpoint' };
    });
};
exports.storeRoutes = storeRoutes;
//# sourceMappingURL=storeRoutes.js.map