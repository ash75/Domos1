import {AltaiBTDevice} from '../RESTClient/RESTClient';
import { Injectable } from '@angular/core';
import {Observable, Observer, BehaviorSubject} from "rxjs";
import {LoggerService} from "../Logger/logger.service";

@Injectable()
export class AppGlobalDataService {
  public static DevicesBluetooth: AltaiBTDevice[];

  private _StatoConnessioneDomotica = new BehaviorSubject<boolean>(false);
  StatoConnessioneDomotica$ = this._StatoConnessioneDomotica.asObservable();
  /***
   * Setta lo stato della connessione con Domotica ed emette l'observer
   * @param value
   * @constructor
   */
  public setStatoConnessioneDomotica(value: boolean) {

    //this._StatoConnessioneDomotica = value;
    this._StatoConnessioneDomotica.next(value);
    //LoggerService.debug('Stato Connessione Domotica stato changed to '+value);
  }

  constructor() {


  }

}
