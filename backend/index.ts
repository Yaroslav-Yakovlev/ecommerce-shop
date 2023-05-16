import express, { Express, Request, Response } from "express";

const cors = require('cors');
const products = require('./products')
const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to our online shop API...')
});

app.get('/products', (req: Request, res: Response) => {
    res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

