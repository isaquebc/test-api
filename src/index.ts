import express, { Request, Response } from 'express';
import Mall from 'open-marketplace-getters';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  console.log('Hello')
  // Assuming the correct method is 'getProductsBySeller'
  const store = new Mall.MercadoLivreStore();

  const data = await store.getSellerProducts('298668904');
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});