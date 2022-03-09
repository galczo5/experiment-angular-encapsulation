import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
    <p>
      no-encapsulation works!
    </p>
    <p>
      {{ renderer2.constructor.name }}
    </p>
  `,
  styles: [`
    .app-no-encapsulation {
      display: flex;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent implements OnInit {

  constructor(public readonly renderer2: Renderer2) { }

  ngOnInit(): void {
  }

}
