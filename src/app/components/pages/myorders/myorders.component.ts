import { Component , OnInit } from '@angular/core';
import { OrderListService } from '../../../services/order-list.service';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})

export class MyordersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderListService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }
}
