import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {MyComponent} from './my.component';
import {MyModalComponent} from '../my-modal/my-modal.component';
import {CalendarComponent} from '../calendar/calendar.component';
import {MyComponentRoutingModule} from './my-component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyComponentRoutingModule
  ],
  declarations: [MyComponent, MyModalComponent, CalendarComponent]
})
export class MyComponentModule {}
