import {AppGlobalDataService} from '../Services/AppGlobalService/app-global-data.service';
import { LoggerService } from '../Services/Logger/logger.service';
import { AltaiBTDevice } from '../Services/RESTClient/RESTClient';
import { AltaiRestService } from '../Services/RESTClient/altai-rest.service';


import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-device-bluetooth',
  templateUrl: './device-bluetooth.component.html',
  styleUrls: ['./device-bluetooth.component.css']
})

export class DeviceBluetoothComponent implements OnInit, OnDestroy {
  /**
   * Devices bluetooth trovati
   * 
   * @private
   * @type {AltaiBTDevice[]}
   * @memberOf DeviceBluetoothComponent
   */
  private devicesBluetooth: AltaiBTDevice[];
  /**
   * Creates an instance of DeviceBluetoothComponent.
   * 
   * @param {AltaiRestService} _rest
   * 
   * @memberOf DeviceBluetoothComponent
   */
  constructor(private _rest: AltaiRestService) {


  }


  /**
   * Carica i devices bluetooth dal server
   * 
   * 
   * @memberOf DeviceBluetoothComponent
   */
  caricaDevicesFromServer() {
    this._rest.DevicesBluetoothController.getDevices().toPromise().then((data) => {
      this.devicesBluetooth = data;
      LoggerService.debug('DeviceBluetoothComponent: Devices trovati: ' + data);
      AppGlobalDataService.DevicesBluetooth = data;
    });
  }



  ngOnInit() {
    this.devicesBluetooth = [];
  }
  ngOnDestroy() {

  }

}
