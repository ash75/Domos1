import {Injectable, EventEmitter} from '@angular/core';
import {LoggerService} from "../Services/Logger/logger.service";
import {Output} from "@angular/core/src/metadata/directives";
import {LocalStorageService} from "../Services/LocalStorage/local-storage.service";

@Injectable()
export class DomoticaSocketService {
  private ws;
  @Output() statoSeriale$: EventEmitter<any>;
  @Output() statoSistemaDomotica$: EventEmitter<any>;
  @Output() deviceDomoticaAdded$: EventEmitter<any>;

  constructor() {
    LoggerService.componentLoaded('DomoticaSocketService caricato!!!');
    this.statoSeriale$ = new EventEmitter();
    this.statoSistemaDomotica$ = new EventEmitter();
    this.deviceDomoticaAdded$ = new EventEmitter();
  }




  init() {
    var server= LocalStorageService.serverConf.webSocketDomoticaEndPoint;
    LoggerService.debug('Server webSocket caricato da LocalStorage: '+server);
    this.ws = new WebSocket(server);

    this.ws.onopen = (event)=> {
      LoggerService.debug('WebSocket domoticasocket aperto');
      this.ws.send('Hello');
    };

    this.ws.onerror=(error)=>{
      LoggerService.error('Errore websocket');

    };


    this.ws.onmessage = (event)=> {
      let tipo = event.data.Tipo;
      let idmessaggio= event.data.idMessaggio;
      let dataCompleted= event.data;
      LoggerService.comandoDaServer(dataCompleted);
      if(tipo=='DOMOTICA' && idmessaggio=='SYSTEM_CONNECTED'){
        this.statoSistemaDomotica$.emit(idmessaggio);
        LoggerService.eventEmitted('DOMOTICA_SOCKET_SERVICE','statoSistemaDomotica$',dataCompleted);
      }
      if(tipo=='DOMOTICA' && idmessaggio=='DEVICES_ADDED'){
        this.deviceDomoticaAdded$.emit(dataCompleted);
        LoggerService.eventEmitted('DOMOTICA_SOCKET_SERVICE','deviceDomoticaAdded$',dataCompleted);
      }
      if(tipo=='SERIALE' && idmessaggio=='SERIAL_OPENED'){
        this.statoSeriale$.emit(idmessaggio);
        LoggerService.eventEmitted('DOMOTICA_SOCKET_SERVICE','statoSeriale$',dataCompleted);
      }
      if(tipo=='SERIALE' && idmessaggio=='SERIAL_CLOSED'){
        this.statoSeriale$.emit(idmessaggio);
        LoggerService.eventEmitted('DOMOTICA_SOCKET_SERVICE','statoSeriale$',dataCompleted);
      }
      if(tipo=='SERIALE' && idmessaggio=='SERIAL_ERROR'){
        this.statoSeriale$.emit(idmessaggio);
        LoggerService.eventEmitted('DOMOTICA_SOCKET_SERVICE','statoSeriale$',dataCompleted);
      }
    }
  }

  getStatoWebSocket(){
    return this.ws.readyState;
  }
}
