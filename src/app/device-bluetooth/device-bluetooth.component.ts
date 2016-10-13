import {LoggerService} from '../Services/Logger/logger.service';
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
  constructor(private _rest: AltaiRestService) {
    // TODO: Da implementare un evento per la gestione della ricezione dei devices
    this._rest.DevicesBluetoothController.getDevices().toPromise().then((data) => {
      this.devicesBluetooth = data;
      LoggerService.debug('DeviceBluetoothComponent: Devices trovati: ' + data);
    });
  }



  ngOnInit() {
    this.devicesBluetooth = [];
  }
  ngOnDestroy() {

  }

}
