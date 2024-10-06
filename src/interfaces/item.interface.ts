interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  free_shipping: boolean;
  location: string;
  picture: string;
  condition?: string;
}
