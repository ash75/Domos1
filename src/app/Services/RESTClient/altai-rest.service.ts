import { Injectable } from '@angular/core';
import { LoginClient, DevicesClient, DomoticaClient } from "./RESTClient";
import { Http } from "@angular/http";
import { LocalStorageService } from "../LocalStorage/local-storage.service";

@Injectable()
export class AltaiRestService {
  public loginController;

/**
 * REST dei device Bluetooth
 * 
 * @type {DevicesClient}
 * @memberOf AltaiRestService
 */
  public DevicesBluetoothController: DevicesClient;
  public DomoticaController;

  /**
   * Creates an instance of AltaiRestService.
   * 
   * @param {Http} http
   * 
   * @memberOf AltaiRestService
   */
  constructor(http: Http) {

    let url = LocalStorageService.serverConf.restEndPoint;
    this.loginController = new LoginClient(http, url);
    this.DevicesBluetoothController = new DevicesClient(http, url);
    this.DomoticaController = new DomoticaClient(http, url);
  }


}
