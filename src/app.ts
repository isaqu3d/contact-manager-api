import express from 'express';
import { apiReference } from '@scalar/express-api-reference';
import { swaggerSpec } from './config/swagger.js';
import { contatosRouter } from './routes/contatos.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

export const app = express();

app.use(express.json());

app.use('/contatos', contatosRouter);

app.get('/openapi.json', (_req, res) => {
  res.json(swaggerSpec);
});

app.use(
  '/docs',
  apiReference({
    url: '/openapi.json',
    theme: 'purple',
  }),
);

app.use(errorHandler);
