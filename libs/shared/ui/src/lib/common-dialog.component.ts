import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgtpe-common-dialog',
  standalone: true,
  imports: [],
  templateUrl: './common-dialog.component.html',
  styleUrl: './common-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonDialogComponent {}
