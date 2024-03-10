import { Component, inject } from '@angular/core';
import { LibaryItemComponent } from './libary-item.component';
import { RouterLink } from '@angular/router';
import { LivesetStore } from './liveset.store';

@Component({
  standalone: true,
  imports: [RouterLink, LibaryItemComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  protected readonly livesetStore = inject(LivesetStore);
}
