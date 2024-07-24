import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
)


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});