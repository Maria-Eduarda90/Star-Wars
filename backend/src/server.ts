import express from 'express';
import cors from 'cors';
import client from 'prom-client';

import { router } from "./routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.use(router);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});



const port = Number(process.env.PORT) || 3333;

app.listen(port, '0.0.0.0', () => {
  console.log(`rodando na porta ${port}`);
});

