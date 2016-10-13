import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {LoggerService} from "../Services/Logger/logger.service";
import {AppGlobalDataService} from "../Services/AppGlobalService/app-global-data.service";
import {ToasterAltaiService} from "../Services/ToasterAltai/toaster-altai.service";
import {DomoticaSocketService} from "../Socket/domotica-socket.service";
import {VoiceCommandsService} from "../Services/VoiceCommands/voice-commands.service";
import {AppSettings} from "../AppSettings";

@Component({
  selector: 'app-stato-impianto',
  templateUrl: './stato-impianto.component.html',
  styleUrls: ['./stato-impianto.component.css']
})
export class StatoImpiantoComponent implements OnInit {
  StatoImpiantoSubscription: Subscription;
  private statoImpiantoClass;
  private statoSerialeClass;
  private serialeChiusa;
  private cssBottoneGenerico;


  constructor(private _AppGlobal: AppGlobalDataService,
            private _socket: DomoticaSocketService) {
    this.statoImpiantoClass='led-yellow';
    this.statoSerialeClass='led-yellow';
    this.serialeChiusa=true;

    //css dinamico
    this.cssBottoneGenerico= AppSettings.BOTTONE_GENERICO;
  }

  ngOnInit() {



    LoggerService.eventSubscribed('STATO_IMPIANTO','StatoConnessioneDomotica$');
    this.StatoImpiantoSubscription = this._AppGlobal.StatoConnessioneDomotica$
      .subscribe(data => {
        //LoggerService.eventIntercetted('STATO_IMPIANTO','StatoConnessioneDomotica$',data);
        this.statoImpiantoClass = data ? 'led-green' : 'led-red';
      });

    LoggerService.eventSubscribed('STATO_IMPIANTO','statoSeriale$');
    this._socket.statoSeriale$.subscribe((data)=>{
      LoggerService.eventIntercetted('STATO_IMPIANTO','statoSeriale$',data);
      if(data=='SERIAL_OPENED'){
        this.statoSerialeClass= 'led-green';
        this.serialeChiusa=false;
      } else {
        this.statoSerialeClass= 'led-red';
      }

      if(data=='SERIAL_ERROR'){
        VoiceCommandsService.Parla('Seriale in errore');
      }
    });

  }

  ngOnDestroy() {

    this.StatoImpiantoSubscription.unsubscribe();
    LoggerService.eventUnSubscribed('STATO_IMPIANTO','StatoImpiantoSubscription');

    this._socket.statoSeriale$.unsubscribe();
    LoggerService.eventUnSubscribed('STATO_IMPIANTO','statoSeriale$');
  }


}
