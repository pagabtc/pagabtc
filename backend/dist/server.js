"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authRoutes_1 = require("./routes/authRoutes");
const userRoutes_1 = require("./routes/userRoutes");
const storeRoutes_1 = require("./routes/storeRoutes");
const paymentRoutes_1 = require("./routes/paymentRoutes");
const webhookRoutes_1 = require("./routes/webhookRoutes");
const app = (0, fastify_1.default)({ logger: true });
app.register(authRoutes_1.authRoutes, { prefix: '/api/auth' });
app.register(userRoutes_1.userRoutes, { prefix: '/api' });
app.register(storeRoutes_1.storeRoutes, { prefix: '/api' });
app.register(paymentRoutes_1.paymentRoutes, { prefix: '/api' });
app.register(webhookRoutes_1.webhookRoutes, { prefix: '/api' });
app.get('/', async (request, reply) => {
    return { message: 'PagaBTC API is running!' };
});
app.setErrorHandler((error, request, reply) => {
    app.log.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
});
const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await app.listen({ port: Number(PORT), host: '0.0.0.0' });
        console.log(`Server running on port ${PORT}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map