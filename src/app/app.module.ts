import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShadowComponent } from './shadow/shadow.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { StylesComponent } from './styles/styles.component';
import { StyleUrlsComponent } from './style-urls/style-urls.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowComponent,
    EmulatedComponent,
    NoEncapsulationComponent,
    StylesComponent,
    StyleUrlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
