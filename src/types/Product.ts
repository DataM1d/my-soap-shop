export interface Product {
  id: string;
  name_key: string;
  description_key: string;
  price: number;
  scent_category: string;
  image_url?: string;
  stock_quantity: number;
  is_featured: boolean;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}