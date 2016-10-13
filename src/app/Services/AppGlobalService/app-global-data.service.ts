import {BehaviorSubject} from '../../../../node_modules/rxjs/src/BehaviorSubject';
import {AltaiBTDevice} from '../RESTClient/RESTClient';
import {Injectable} from '@angular/core';


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


    this._StatoConnessioneDomotica.next(value);

  }

  constructor() {


  }

}
