import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {
  @Input() attrition: string;
  @Input() totalUsers: number;
  @Input() totalUsers1: number;
  @Input() totalUsers2: number;
  @Input() totalUsers3: number;

  constructor() { }
}