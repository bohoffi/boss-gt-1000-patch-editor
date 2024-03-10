import { Component } from '@angular/core';
import { Item, LibaryItemComponent } from './libary-item.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, LibaryItemComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  protected readonly items: Item[] = [
    {
      id: 'U01-1',
      name: 'Patch 1',
    },
    {
      id: 'U01-2',
      name: 'Patch 2',
    },
    {
      id: 'U01-3',
      name: 'Patch 3',
    },
    {
      id: 'U01-4',
      name: 'Patch 4',
    },
    {
      id: 'U01-5',
      name: 'Patch 5',
    },
    {
      id: 'U02-1',
      name: 'Patch 6',
    },
    {
      id: 'U02-2',
      name: 'Patch 7',
    },
    {
      id: 'U02-3',
      name: 'Patch 8',
    },
    {
      id: 'U02-4',
      name: 'Patch 9',
    },
    {
      id: 'U02-5',
      name: 'Patch 10',
    },
    {
      id: 'U03-1',
      name: 'Patch 11',
    },
    {
      id: 'U03-2',
      name: 'Patch 12',
    },
    {
      id: 'U03-3',
      name: 'Patch 13',
    },
    {
      id: 'U03-4',
      name: 'Patch 14',
    },
    {
      id: 'U03-5',
      name: 'Patch 15',
    },
    {
      id: 'U04-1',
      name: 'Patch 16',
    },
    {
      id: 'U04-2',
      name: 'Patch 17',
    },
    {
      id: 'U04-3',
      name: 'Patch 18',
    },
    {
      id: 'U04-4',
      name: 'Patch 19',
    },
    {
      id: 'U04-5',
      name: 'Patch 20',
    },
    {
      id: 'U05-1',
      name: 'Patch 21',
    },
    {
      id: 'U05-2',
      name: 'Patch 22',
    },
    {
      id: 'U05-3',
      name: 'Patch 23',
    },
    {
      id: 'U05-4',
      name: 'Patch 24',
    },
    {
      id: 'U05-5',
      name: 'Patch 25',
    },
  ];
}
