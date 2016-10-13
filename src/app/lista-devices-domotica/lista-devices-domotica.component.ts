///<reference path="../Modelli/DeviceDomotica.ts"/>
import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {LoggerService} from "../Services/Logger/logger.service";
import {DomoticaSocketService} from "../Socket/domotica-socket.service";
import {AppSettings} from "../AppSettings";
import {validateConfig} from "@angular/router/src/config";

@Component({
  selector: 'app-lista-devices-domotica',
  templateUrl: './lista-devices-domotica.component.html',
  styleUrls: ['./lista-devices-domotica.component.css']
})
export class ListaDevicesDomoticaComponent implements OnInit, OnDestroy, AfterViewInit {
  private Devices: IDeviceDomotica[];
  private test;
  private cssBottoneGenerico;


  ngAfterViewInit(): void {
  }


  ngOnDestroy(): void {
    LoggerService.eventUnSubscribed('LISTA_DEVICE_DOMOTICA', 'deviceDomoticaAdded$');
    this._socket.deviceDomoticaAdded$.unsubscribe();
  }

  constructor(private _socket: DomoticaSocketService) {
    LoggerService.componentLoaded('ListaDeviceComponent Caricato');
    this.test=[{
      nome: 'pino'
    }];

    // css Dinamico
    this.cssBottoneGenerico= AppSettings.BOTTONE_GENERICO;


  }

  ngOnInit() {

    this.Devices = [
      {

        defaultCanAddress: '00000001',
        deviceFamily: '02',
        deviceProtocol: '01',
        deviceInitializer: '01',
        deviceSubFamily: '01',
        serialNumber: '12345',
        serialNumberString: '283837272737727',
        DO: [
          {
            indice: 0,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 1,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 2,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 3,
            viewState: 'OFF',
            value: false
          }
        ],
        Tipologia: 'Rele 4',
        imageSource: 'assets/images/rele.jpg',
      },
      {
        imageSource: 'assets/images/rele.jpg',
        defaultCanAddress: '00000002',
        deviceFamily: '02',
        deviceProtocol: '01',
        deviceInitializer: '01',
        deviceSubFamily: '01',
        serialNumber: '12345',
        serialNumberString: '283837272737727',
        DO: [
          {
            indice: 0,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 1,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 2,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 3,
            viewState: 'OFF',
            value: false
          }
        ],
        Tipologia: 'Rele 4'
      },
      {
        defaultCanAddress: '00000001',
        deviceFamily: '02',
        deviceProtocol: '01',
        deviceInitializer: '01',
        deviceSubFamily: '01',
        serialNumber: '12345',
        serialNumberString: '283837272737727',
        DO: [
          {
            indice: 0,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 1,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 2,
            viewState: 'OFF',
            value: false
          },
          {
            indice: 3,
            viewState: 'OFF',
            value: false
          }
        ],
        Tipologia: 'Rele 4',
        imageSource: 'assets/images/rele.jpg',
      },
    ];


    LoggerService.eventSubscribed('LISTA_DEVICE_DOMOTICA', 'deviceDomoticaAdded$');
    this._socket.deviceDomoticaAdded$.subscribe((data)=> {
      this.Devices = data;
    })
  }

  changeStato($event,device: IDeviceDomotica,indiceRele: number,rele: IDigitalOutput) {
    //device.DO[indiceRele].viewState="ON";
    if(rele.value){
      rele.viewState="OFF";
    } else {
      rele.viewState="ON";
    }

  };

}
