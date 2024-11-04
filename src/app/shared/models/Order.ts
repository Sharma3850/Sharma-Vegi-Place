import { CartItem } from './CartItem';

export class Order {
  orderId: string;
  items: CartItem[];
  totalPrice: number;
  pickupTime: string;
  orderDate: Date;
  status: string;

  constructor() {
    this.orderId = '';  // Assign unique ID when creating the order
    this.items = [];
    this.totalPrice = 0;
    this.pickupTime = '';
    this.orderDate = new Date();
    this.status = 'Pending';  // Default status
  }
}
