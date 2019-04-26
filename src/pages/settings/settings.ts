import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToolService } from '../../services/tool.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  tools: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _toolsService: ToolService
  ) {

  }

  ionViewDidLoad() {
    this._toolsService.getTools()
      .subscribe(data => {
        this.tools = data;
      });
  }

}
