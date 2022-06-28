import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { EffectBlock } from 'shared-api';

@Component({
  selector: 'bgt-pe-block-container',
  templateUrl: './block-container.component.html',
  styleUrls: ['./block-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockContainerComponent {

  @Input()
  switchable = true;
  @Input()
  blockTitle: string;
  @Input()
  theme = 'theme-default';
  @Input()
  effectBlock: EffectBlock;

  @Output()
  stateChanged: EventEmitter<boolean> = new EventEmitter();

  // private _state: boolean;
  _state: boolean = false;

  toggleState(): void {
    this._state = !this._state;
    this.stateChanged.emit(this._state);
  }
}
