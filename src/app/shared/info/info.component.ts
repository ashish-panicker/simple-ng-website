import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../types/Info';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() paraText: string = '';
  @Input() listItems: string[] = [];
  @Input() linkItems: Link[] = [];
  @Input() containsLinks: boolean = false;
}
