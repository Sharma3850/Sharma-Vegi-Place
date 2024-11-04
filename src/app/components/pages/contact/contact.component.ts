import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Ensure you have the correct styles
})
export class ContactComponent {

  OnSubmit(contactForm: any) {
    if (contactForm.valid) {
      Swal.fire({
        title: 'Thank you!',
        text: 'We will contact you soon.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Reset the form after confirmation
        contactForm.reset();
      });
    }
  }
}
