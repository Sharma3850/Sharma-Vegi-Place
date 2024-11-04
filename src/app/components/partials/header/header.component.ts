import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { AuthenticateServiceService } from '../../../services/authenticate-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartQuantity = 0;
  user: any;
  userName: string | null | undefined ;

  constructor(
    private cartService: CartService,
    private router: Router, 
    public authService: AuthenticateServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.userName = user.displayName || user.email || '';
        console.log("User name:", this.userName);
      } 
    });

   
    this.cartService.getCartObservable().subscribe(newCart => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  async logout() {
    this.spinner.show();
    try {
      this.authService.logout();
      this.userName = ''
      localStorage.setItem("session","false");
      // console.log("on logout session :",localStorage.getItem("session"))
      localStorage.removeItem('session');
      this.router.navigate(['']);
      
    } catch (error) {
      console.error('Logout error:', error);
    }
      this.spinner.hide();
  }
}
