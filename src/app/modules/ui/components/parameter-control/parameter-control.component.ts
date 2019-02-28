import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ParameterValue } from '@data/interfaces';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'bgt-pe-parameter-control',
  templateUrl: './parameter-control.component.html',
  styleUrls: ['./parameter-control.component.scss']
})
export class ParameterControlComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  values: { display: string; value: number; }[];
  @Input()
  defaultValueIndex = 0;

  value: number;

  private isEdit = false;
  private step: number;
  private valueIndex: number;
  private startOffset: number;

  // constructor() {
  //   this.step = 75 / (this.values.length - 1);
  //   this.valueIndex = this.defaultValueIndex;
  //   this.value = this.valueIndex * this.step;
  // }

  ngOnInit() {
    this.step = 75 / (this.values.length - 1);
    this.valueIndex = this.defaultValueIndex;
    this.value = this.valueIndex * this.step;
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent): void {
    this.isEdit = true;
    this.startOffset = event.pageY;
  }

  @HostListener('document:mouseup')
  public onMouseUp(): void {
    this.isEdit = false;
    this.startOffset = undefined;
  }

  @HostListener('document:mousemove', ['$event'])
  onmousemove(event: MouseEvent): void {
    if (!this.isEdit) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if ((this.startOffset - event.pageY) > (25 / this.values.length)) {
      this.increment();
      this.startOffset = event.pageY;
    }
    if ((this.startOffset - event.pageY) < -(25 / this.values.length)) {
      this.decrement();
      this.startOffset = event.pageY;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (!this.isEdit) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.keyCode !== KEY_CODE.UP_ARROW && event.keyCode !== KEY_CODE.DOWN_ARROW) {
      return;
    }

    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.increment();
    } else {
      this.decrement();
    }
  }

  public get isEditValue(): boolean {
    return this.isEdit;
  }

  public get displayValue(): string {
    return (this.values[this.valueIndex] || {} as ParameterValue).display;
  }

  private increment(): void {
    if (this.valueIndex < (this.values.length - 1)) {
      this.valueIndex++;
      this.updateValue();
    }
  }
  private decrement(): void {
    if (this.valueIndex > 0) {
      this.valueIndex--;
      this.updateValue();
    }
  }

  private updateValue(): void {
    this.value = this.valueIndex * this.step;
  }
}
