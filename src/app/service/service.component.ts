import { Component } from '@angular/core';
import { InfoComponent } from '../shared/info/info.component';
import { Info } from '../shared/types/Info';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  servicesInfo: Info = {
    title: 'Our Services',
    subTitle: 'We offer the following services:',
    paraText: ` Welcome to the Services page. Here you will find information about the
    services we offer to help you succeed in your career. We have a variety of
    services available to help you achieve your goals and reach your full
    potential. Whether you are looking for career coaching, resume writing,
    interview preparation, or job search assistance, we have something for you.`,
    listItems: [
      'Web Development',
      'Mobile Development',
      'Desktop Development',
      'Cloud Development',
      'DevOps Development',
    ],
  };
}
