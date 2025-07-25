import express from 'express';
import { createServer } from '@vercel/node';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

export default createServer(app);