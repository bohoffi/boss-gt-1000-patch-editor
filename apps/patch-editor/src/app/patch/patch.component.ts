import { Component, inject } from '@angular/core';
import { PatchDetailsStore } from './patch-details.store';
import { PatchRoutingComponent } from './patch-routing.component';
import { PatchEditorComponent } from './patch-editor/patch-editor.component';

@Component({
  standalone: true,
  imports: [PatchRoutingComponent, PatchEditorComponent],
  templateUrl: './patch.component.html',
  styleUrl: './patch.component.scss',
  providers: [PatchDetailsStore],
})
export class PatchComponent {
  public readonly patchDetailsStore = inject(PatchDetailsStore);
}
