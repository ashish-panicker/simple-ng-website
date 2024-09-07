import { Component } from '@angular/core';
import { InfoComponent } from '../shared/info/info.component';
import { Info } from '../shared/types/Info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactInfo: Info = {
    title: 'Contact Us',
    subTitle: 'We are here to help you',
    paraText: ` Welcome to the Contact Us page. Here you will find information on how to
    contact us with any questions, comments, or concerns you may have. We are
    here to help you in any way we can, so please don't hesitate to reach out to
    us. Whether you have a question about our services, need assistance with
    your account, or just want to say hello, we are here for you.`,
    listItems: [
      'Email: hello@learnwell.com',
      'Phone: 123-456-7890',
      'Address: 123 Main St, Anytown, USA',
    ],
  };
}
