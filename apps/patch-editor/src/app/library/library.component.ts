import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { LibaryItemComponent } from './libary-item.component';
import { RouterLink } from '@angular/router';
import { CommonDialogComponent } from '@bgtpe/shared/ui';
import { LivesetStore } from './liveset.store';

@Component({
  standalone: true,
  imports: [RouterLink, CommonDialogComponent, LibaryItemComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent {
  protected readonly livesetStore = inject(LivesetStore);

  private loadLivesetDialog =
    viewChild.required<ElementRef<HTMLDialogElement>>('loadLivesetDialog');

  public loadLiveset(): void {
    this.loadLivesetDialog().nativeElement.showModal();
  }

  public uploadFile(event: any) {
    const selectedFile = event.target.files[0];
    this.livesetStore.loadTslFile(selectedFile);
  }
}
