import 'reflect-metadata';
import express from 'express';

import createConnection from '@shared/infra/typeorm';

import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log('🚀 Rentx server started on port 3333!...');
});
