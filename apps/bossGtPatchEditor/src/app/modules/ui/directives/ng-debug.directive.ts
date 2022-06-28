import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit
} from '@angular/core';
import { environment } from '@environments/environment';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngDebug]'
})
export class NgDebugDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}


  ngOnInit(): void {
    if (environment.production) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
