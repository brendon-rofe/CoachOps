import express, { Express, Request, Response } from 'express';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());

app.get('/api/connect-requests/:userId', async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  try {
    const connectRequests = await prisma.connectRequest.findMany({
      where: {
        userId,
      }
    });
    res.json(connectRequests);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

app.get('/api/direct-messages/:userId', async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  try {
    const connectRequests = await prisma.directMessage.findMany({
      where: {
        userId,
      }
    });
    res.json(connectRequests);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

app.get('/api/calls/:userId', async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);
  try {
    const connectRequests = await prisma.call.findMany({
      where: {
        userId,
      }
    });
    res.json(connectRequests);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  };
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
