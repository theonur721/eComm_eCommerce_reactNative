import type { Product } from './Product';
import type { Category } from './Category';

export interface ProductState {
  products: Product[];
  categories: Category[];
  selectedProduct: Product | null;
  isLoading: boolean;
  error: string | null;
}
