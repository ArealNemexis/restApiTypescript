import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) =>{
    return res.send('oi');
});

router.get('/tchau', (req: Request, res: Response) =>{
    return res.send('oi/tchau');
});

export { router };