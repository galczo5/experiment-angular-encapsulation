import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-shadow',
  template: `
    <p>
      shadow works!
    </p>
    <p>
      {{ renderer2.constructor.name }}
    </p>
  `,
  styles: [`
    .app-shadow {
      display: flex;
    }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent implements OnInit {

  constructor(public readonly renderer2: Renderer2) { }

  ngOnInit(): void {
  }

}
