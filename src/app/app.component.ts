import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  type: 'clear' | 'emulated' | 'shadow' | 'none' = 'clear';

  array = new Array(10000).fill(0);

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  render(type: 'clear' | 'emulated' | 'shadow' | 'none'): void {
    let testTime = 0;
    for (let i = 0; i < 100; i++) {
      const start = performance.now();
      this.type = type;
      this.changeDetectorRef.detectChanges();
      const end = performance.now();
      testTime += (end - start);

      this.type = 'clear';
      this.changeDetectorRef.detectChanges();
    }

    console.log('TOTAL', testTime);
    console.log('AVG', testTime / 100);
  }

}
