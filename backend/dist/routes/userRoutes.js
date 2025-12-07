"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userRoutes = async (app) => {
    app.get('/users', async (request, reply) => {
        return { message: 'Get users endpoint' };
    });
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=userRoutes.js.map