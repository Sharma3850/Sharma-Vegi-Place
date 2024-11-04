import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../../../services/authenticate-service.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  // isEmail: boolean = false;
  formData: { username: string; password: string } = { username: '', password: '' };
  isLoading: boolean = false;

  constructor(
    public authService: AuthenticateServiceService,
    private router: Router ,
    private spinner: NgxSpinnerService
  ) {
    localStorage.setItem("session","false");
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide(); 
    }, 500);
  }
  
  async loginWithGoogle() {
    this.spinner.show();
    try {
      
      const user = await this.authService.loginWithGoogle();
      
      if (user) {
        localStorage.setItem("session", "true");
        this.showMessage("Login successful!", "success");
        this.router.navigate(['home']);
      } else {
        this.showMessage("Something went wrong", "info");
      }
      
    } catch (error) {
      console.error('Login error:', error);
      this.showMessage("An error occurred during login. Please try again.", "error");
    }
    this.spinner.hide();
  }

  async onSubmit() {
    this.spinner.show();
    try {
      if (this.formData.username && this.formData.password) {
        const user = await this.authService.login(this.formData.username, this.formData.password);

        if (user) {
          // console.log('session value before submmitting',localStorage.getItem("session"));
          localStorage.setItem("session","true");
          this.showMessage("Login successful!", "success");
          this.router.navigate(['home']); 
        } else {
          alert('Incorrect details provided.');
        }
      } else {
        console.log('Email and password are required');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while logging in.');
    }
    this.spinner.hide();
  }

  async onForget() {
    // this.isEmail = true;
    try {
      await this.authService.resetPassword(this.formData.username);
      console.log('Reset link sent');
      alert('A reset link has been sent to your email.');
    } catch (error) {
      console.log('Failed to send reset link', error);
    }
  }


  showMessage(message: string, type: 'success' | 'error' | 'info') {
    Swal.fire({
      title: type === 'success' ? 'Success!' : type === 'error' ? 'Error!' : 'Info',
      text: message,
      icon: type, // Sets icon based on type
      confirmButtonText: 'OK',
      timer: 3000, // Optional: auto-close after 3 seconds
      timerProgressBar: true,
    });
  }
  
}
