import express, { Express, Request, Response } from 'express';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
