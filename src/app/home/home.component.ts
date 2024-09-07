import { Component } from '@angular/core';
import { Info, Link } from '../shared/types/Info';
import { InfoComponent } from '../shared/info/info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeInfo: Info = {
    title: 'Learning and Development',
    subTitle: 'We are here to help you learn',
    paraText: ` Welcome to the Learning and Development page. Here you will find resources
    to help you learn and grow in your career. We have a variety of resources
    available to help you develop your skills and knowledge. Whether you are
    looking to learn a new skill, improve your current skills, or just want to
    learn more about a particular topic, we have something for you.`,
    listItems: [],
    containsLinks: true,
    linkItems: [
      { title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' },
      { title: 'Coursera', url: 'https://www.coursera.org/' },
      { title: 'Udemy', url: 'https://www.udemy.com/' },
      { title: 'edX', url: 'https://www.edx.org/' },
    ],
  };
}
