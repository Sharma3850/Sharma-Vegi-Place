import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})

export class OrderListService {
  private orders: Order[] = []; 

  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
