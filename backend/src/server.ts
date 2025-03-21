import express from 'express';
import cors from 'cors';

import { router } from "./routes/routes";

const app = express();


app.use(cors({
  origin: 'https://star-wars-web.xdbtqu.easypanel.host'
}));

app.use(express.json());
app.use(router);

const port = Number(process.env.PORT) || 3333;

app.listen(port, '0.0.0.0', () => {
  console.log(`rodando na porta ${port}`);
});

