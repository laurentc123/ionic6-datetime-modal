import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MyModalComponent} from '../my-modal/my-modal.component';

@Component({
  selector: 'app-my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {

  constructor(private readonly modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal(): Promise<void> {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: MyModalComponent,

    } );

    await modal.present();

    await modal.onWillDismiss();

  }
}
