import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bgt-pe-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockContainerComponent {

  @Input()
  theme = 'theme-default';
}
