import {Injectable} from '@angular/core';
import {IUserData} from "../../Modelli/user-data";
import {Observable} from "rxjs";

@Injectable()
export class LocalStorageService {
  public static serverConf: IServerConf;
  public static confGenerale: IGeneralConf;

  constructor() {
  }

  static saveUserData(userData: IUserData) {
    localStorage.setItem('Domotica-userData', JSON.stringify(userData));
  }

  static getUserData(): IUserData {
    let ris = localStorage.getItem('Domotica-userData');
    return ris && JSON.parse(ris);
  }

  /***
   * Configurazione del server
   * @returns {any}
   */
  static getServerConfFromStorage(): IServerConf {
    var defaultServerConf: IServerConf = {
      webSocketDomoticaEndPoint: 'ws://192.168.1.104/domoticasocket',
      restEndPoint: 'http://192.168.1.104:9000'
    };
    let ris = localStorage.getItem('Domotica-Server');
    if (ris == null) {
      var dd = JSON.stringify(defaultServerConf);
      localStorage.setItem('Domotica-Server', dd);
      //this.getIpAddress();
      LocalStorageService.serverConf = defaultServerConf;
      return defaultServerConf;
    }
    let rr = ris && JSON.parse(ris);
    LocalStorageService.serverConf = rr;
    return rr;
  }

  static saveServerConf(conf: IServerConf): Observable<boolean> {
    try {
      var dd = JSON.stringify(conf);
      localStorage.setItem('Domotica-Server', dd);
      return Observable.of(true);
    } catch (error) {
      return Observable.of(false);
    }
  }


  static getConfigurazioneGeneraleFromStorage(): IGeneralConf {
    var defaultGeneralConf: IGeneralConf = {
      debug: true,
      logEvents: true
    };
    let ris = localStorage.getItem('Domotica-Conf');
    if (ris == null) {
      var dd = JSON.stringify(defaultGeneralConf);
      localStorage.setItem('Domotica-Conf', dd);
      //this.getIpAddress();
      LocalStorageService.confGenerale = defaultGeneralConf;
      return defaultGeneralConf;
    }
    let rr = ris && JSON.parse(ris);
    LocalStorageService.confGenerale = rr;
    return rr;
  }

}
