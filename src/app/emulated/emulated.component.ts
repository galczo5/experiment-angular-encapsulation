import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-emulated',
  template: `
    <p>
      emulated works!
    </p>
    <p>
      {{ renderer2.constructor.name }}
    </p>
  `,
  styles: [`
    .app-emulated {
      display: flex;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent implements OnInit {

  constructor(public readonly renderer2: Renderer2) { }

  ngOnInit(): void {
  }

}
