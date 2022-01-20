import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IonicModule} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
