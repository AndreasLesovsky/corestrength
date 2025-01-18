import { Product } from './products.model';

export interface CartItem {
    product: Product; // Das Produkt im Warenkorb
    quantity: number; // Die Menge dieses Produkts im Warenkorb
  }
  