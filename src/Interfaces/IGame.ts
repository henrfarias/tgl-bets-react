interface IGames { 
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
  created_at?: string;
  updated_at?: string;
}

export default IGames;