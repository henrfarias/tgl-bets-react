import IBet from './IBets';

interface ICart {
  cartItems: IBet[];
  onDelete: (bet: IBet) => void;
  minCartSave: number;
}

export default ICart;