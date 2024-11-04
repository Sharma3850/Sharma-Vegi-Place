import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../../../services/authenticate-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  CeateUserformData = { name: '', email: '', password: '' };
  confirmPassword: string = '';

  constructor(private authService: AuthenticateServiceService, private router: Router) {}

  async onSubmit() {
    if (this.CeateUserformData.password != this.confirmPassword) {
      Swal.fire('Confirm Passwords do not match!', '', 'info');
      return;
    }

    Swal.fire({
      title: 'Please confirm all the details are correct?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const user = await this.authService.signup(this.CeateUserformData.email, this.CeateUserformData.password);

          if (user) {
            Swal.fire('Account created successfully!', '', 'success');
            this.router.navigate(['/login']);
          } else {
            Swal.fire('Signup failed', '', 'info');
          }
        } catch (error : any) {
          console.error('Error during signup:', error);
          Swal.fire('An error occurred', error.message, 'error');
        }
      } else if (result.isDenied) {
        Swal.fire('Please review your details', '', 'info');
      }
    });
  }
}
