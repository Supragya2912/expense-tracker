import dotenv from 'dotenv';
import  connectToMongoDb  from './services/connectToMongoDb';
import apiRoutes from './routes/api';
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const url: string = process.env.MONGO_URL as string;
if (!url) {
  console.error('MONGO_URL environment variable is not defined');
  process.exit(1);
}

const PORT = process.env.PORT || 8080;

const { closeMongoConnection } = connectToMongoDb();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await closeMongoConnection(true);
  process.exit(0);
});
