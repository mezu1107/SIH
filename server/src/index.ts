import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import applyRouter from './routes/apply';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',   // ← Yeh sab origins allow kar dega (development ke liye perfect)
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,   // optional agar future mein cookies chahiye
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' });
});

// Routes
app.use('/api/apply', applyRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});