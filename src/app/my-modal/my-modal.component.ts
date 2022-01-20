import {Component, OnInit} from '@angular/core';
import {CalendarComponent} from '../calendar/calendar.component';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss'],
})
export class MyModalComponent implements OnInit {

  constructor(private readonly popoverController: PopoverController) { }

  ngOnInit() {}

  async selectDate(event: MouseEvent): Promise<void> {

    const typePopover: HTMLIonPopoverElement = await this.popoverController.create({
      component: CalendarComponent,
      event,
    });

    await typePopover.present();

  }
}
