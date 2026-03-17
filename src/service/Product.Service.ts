import URLS from './Urls';
import verbs from './Verbs';
import type { Product } from '../models/data/Product';
import type { Category } from '../models/data/Category';

const getAllProducts = (): Promise<Product[]> => {
  return verbs.get<Product[]>(URLS.PRODUCTS.ALL);
};

const getProduct = (id: number): Promise<Product> => {
  return verbs.get<Product>(URLS.PRODUCTS.SINGLE(id));
};

const getCategories = (): Promise<Category[]> => {
  return verbs.get<Category[]>(URLS.CATEGORIES.ALL);
};

const searchProductByTitle = (title: string): Promise<Product[]> => {
  return verbs.get<Product[]>(URLS.PRODUCTS.SEARCH(title));
};

const getProductsByCategory = (categoryId: number): Promise<Product[]> => {
  return verbs.get<Product[]>(URLS.PRODUCTS.BY_CATEGORY(categoryId));
};

export default {
  getAllProducts,
  getProduct,
  getCategories,
  searchProductByTitle,
  getProductsByCategory,
};
