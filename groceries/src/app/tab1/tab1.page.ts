import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import {GroceriesServiceService} from '../services/groceries-service.service';
import {InputDialogServiceService} from '../services/input-dialog-service.service';
import {present} from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Grocery List';


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController,
              public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService) {


  }

  loadItems() {

    return this.dataService.getItems();
  }

  async removeItem(item, index) {

    console.log('Removing Item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + index + '...',
      duration: 3000
    });
    await toast.present();
    this.dataService.removeItem(index);
  }


  async editItem(item, index) {
    console.log('Edit Item - ', item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item -' + index + '...',
      duration: 3000
    });
    // this.items = this.items.filter( itm => itm.name !== item.name);
    await toast.present();
    await this.inputDialogService.showPrompt(item, index);
  }

  async addItem() {
    console.log('Adding Item');
    await this.inputDialogService.showPrompt();
  }

}
