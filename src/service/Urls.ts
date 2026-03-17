const BASE_URL = 'https://api.escuelajs.co/api/v1/';

const URLS = {
  BASE_URL,

  PRODUCTS: {
    ALL: 'products',
    SINGLE: (id: number) => `products/${id}`,
    SEARCH: (title: string) => `products/?title=${title}`,
    BY_CATEGORY: (categoryId: number) => `categories/${categoryId}/products`,
  },

  CATEGORIES: {
    ALL: 'categories',
  },

  AUTH: {
    LOGIN: 'auth/login',
    PROFILE: 'auth/profile',
    REFRESH_TOKEN: 'auth/refresh-token',
  },
};

export default URLS;
