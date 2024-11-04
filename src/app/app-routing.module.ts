import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { authGuard } from './guards/auth-guard.guard';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MyordersComponent } from './components/pages/myorders/myorders.component';

const routes: Routes = [
  { path : '', component : LoginPageComponent },
  { path : 'login', component : LoginPageComponent },
  { path : 'about', component : AboutComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'home', component : HomeComponent, canActivate: [authGuard] },
  { path : 'signup', component : SignupComponent },
  { path : 'search/:searchTerm', component : HomeComponent, canActivate: [authGuard]  },
  { path : 'checkout', component : CheckoutComponent, canActivate: [authGuard]  },
  { path : 'tag/:tag', component : HomeComponent, canActivate: [authGuard]  },
  { path : 'vegetable/:id', component : FoodPageComponent, canActivate: [authGuard] },
  { path : 'cart-page', component : CartPageComponent, canActivate: [authGuard] },
  { path : 'myorders', component : MyordersComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
