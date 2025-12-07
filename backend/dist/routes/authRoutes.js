"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const authRoutes = async (app) => {
    app.post('/register', async (request, reply) => {
        return { message: 'Register endpoint' };
    });
    app.post('/login', async (request, reply) => {
        return { message: 'Login endpoint' };
    });
};
exports.authRoutes = authRoutes;
//# sourceMappingURL=authRoutes.js.map