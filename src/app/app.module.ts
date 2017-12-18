import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxFancyPreloaderModule} from 'ngx-fancy-preloader';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFancyPreloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
