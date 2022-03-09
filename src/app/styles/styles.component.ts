import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  template: `<p>styles works!</p>`,
  styles: [`
    .app-styles {
      display: flex;
    }
  `]
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
