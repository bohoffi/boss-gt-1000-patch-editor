import { Component, input } from '@angular/core';
import { Patch } from '@bgtpe/shared/api';

export interface Item {
  id: string;
  name: string;
}

@Component({
  selector: 'bgtpe-libary-item',
  standalone: true,
  imports: [],
  templateUrl: './libary-item.component.html',
  styleUrl: './libary-item.component.scss',
})
export class LibaryItemComponent {
  public patch = input.required<Patch>();
}
