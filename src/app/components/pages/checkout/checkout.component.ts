import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { OrderListService } from '../../../services/order-list.service';
import { Cart } from '../../../shared/models/Cart';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  cart: Cart = new Cart();
  selectedPickupTime: string = '';
  orderConfirmed: boolean = false;
  pickupTimes: string[] = [
    'In 15 minutes',
    'In 30 minutes',
    'In 1 hour',
    'In 2 hours',
    'Tomorrow'
  ];

  constructor(
    private cartService: CartService,
    private orderService: OrderListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart; 
    });
  }

  GoToHome() {
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }

  confirmOrder() {
    Swal.fire({
      title: 'Confirm Order',
      text: `Are you sure you want to confirm this order for pickup ${this.selectedPickupTime}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderConfirmed = true;

        // Create the order and add it to the order list
        const order = {
          orderId: this.generateOrderId(),
          items: this.cart.items,
          totalPrice: this.cart.totalPrice,
          pickupTime: this.selectedPickupTime,
          orderDate: new Date(),
          status: 'Confirmed'
        };
        this.orderService.addOrder(order);

        // Clear the cart and show success message
        this.cartService.clearCart();
        Swal.fire('Confirmed!', 'Your order has been successfully confirmed.', 'success')
          .then(() => {
            this.router.navigate(['/myorders']); // Navigate to myorders page after confirmation
          });
      }
    });
  }

  // Generate a unique order ID (you can improve this as needed)
  generateOrderId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
