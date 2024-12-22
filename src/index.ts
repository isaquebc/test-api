import express, { Request, Response } from 'express';
import Mall from 'open-marketplace-getters';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  // Assuming the correct method is 'getProductsBySeller'
  const store = new Mall.MercadoLivreStore();

  const data = await store.searchInSeller('298668904', 'fifa');
  const data1 = await store.getSellerProducts('298668904');

  res.send(data);
});
app.get('/1', async (req: Request, res: Response) => {
  // Assuming the correct method is 'getProductsBySeller'
  const store = new Mall.MercadoLivreStore();
  const data = await store.searchInSeller('298668904', 'fifa');
  const data1 = await store.getSellerProducts('298668904') as any;
  const resp = await store.getProductLink(data1.results[0].id);
  res.send(resp);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});