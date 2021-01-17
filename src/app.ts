import express from 'express';
import {Request, Response} from 'express';

const app = express();
const PORT = 3000;


app.get('/', (req: Request, res: Response) =>{
    return res.send('oi');
});

app.get('/tchau', (req: Request, res: Response) =>{
    return res.send('oi/tchau');
});

app.listen(PORT);
