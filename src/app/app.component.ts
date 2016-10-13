import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from "./Services/Logger/logger.service";
import { DomoticaSocketService } from "./Socket/domotica-socket.service";
import { AltaiRestService } from "./Services/RESTClient/altai-rest.service";
import { AppGlobalDataService } from "./Services/AppGlobalService/app-global-data.service";
import { Subscription, Observable } from "rxjs";
import { Router } from '@angular/router';
import { VoiceCommandsService } from "./Services/VoiceCommands/voice-commands.service";
import { LocalStorageService } from "./Services/LocalStorage/local-storage.service";
import { IUserData } from "./Modelli/user-data";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  public static devicesDomotica: IDeviceDomotica;
  title = 'Domotica 2015';
  StatoImpiantoSubscription: Subscription;
  private NomeCognomeUtente;

  constructor(private _socketDomotica: DomoticaSocketService,
    private _AltaiRest: AltaiRestService,
    private _AppGlobal: AppGlobalDataService,
    private _router: Router
  ) {
    LoggerService.componentLoaded('AppComponent caricato!!!');

    let userDataFromStorage = LocalStorageService.getUserData();
    this.NomeCognomeUtente = userDataFromStorage.cognome + ' ' + userDataFromStorage.nome;
    if (this.NomeCognomeUtente == null) {
      let userData: IUserData = {
        nome: 'Utente1',
        cognome: 'Utente1'
      };
      LocalStorageService.saveUserData(userData);
    }
    this.startTimerUpdateServer();

    this._socketDomotica.init();


    // Sottoscrizioni
    LoggerService.eventSubscribed('APP.COMPONENT', 'statoSeriale$');
    this._socketDomotica.statoSeriale$.subscribe((data) => {
      LoggerService.eventIntercetted('APP.COMPONENT', 'statoSeriale$', data);
    });

    LoggerService.eventSubscribed('APP.COMPONENT', 'statoSistemaDomotica$');
    this._socketDomotica.statoSistemaDomotica$.subscribe((data) => {
      LoggerService.eventIntercetted('APP.COMPONENT', 'statoSistemaDomotica$', data);
    });

    LoggerService.eventSubscribed('APP.COMPONENT', 'deviceDomoticaAdded$');
    this._socketDomotica.deviceDomoticaAdded$.subscribe((data) => {
      LoggerService.eventIntercetted('APP.COMPONENT', 'deviceDomoticaAdded$', data);
      AppComponent.devicesDomotica = data.Data;

    });


    // Metodi REST
    this._AltaiRest.DomoticaController.connettiSistemaDomotica().toPromise().then((data) => {
      LoggerService.eventIntercetted('APP.COMPONENT', 'connettiSistemaDomotica', data);
    });

  }


  /**
   * Visualizza a schermo intero
   */
  toggleFullScreen() {
    let videoElement = document.getElementById("center_page");
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else {
        // videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        videoElement.webkitRequestFullScreen();
      }
    } else {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else {
        document.webkitCancelFullScreen();
      }
    }
  }


  getStatoServer() {
    // LoggerService.warn('Tentativo connessione col server...');
    let statoSocket = this._socketDomotica.getStatoWebSocket();
    if (statoSocket === 3) {
      this._socketDomotica.init();
    }
    this._AltaiRest.loginController.online().toPromise().then((data) => {
      this._AppGlobal.setStatoConnessioneDomotica(true);
    }).catch((error) => {
      this._AppGlobal.setStatoConnessioneDomotica(false);
      VoiceCommandsService.Parla('Attenzione! sistema di Domotica off-line');
      let link = ['/statoImpianto'];
      this._router.navigate(link);
    });
  }

  startTimerUpdateServer() {
    Observable
      .timer(2000, 10000)
      .timeInterval()
      .subscribe((x) => this.getStatoServer());
  }

  ngOnInit() {
    this.StatoImpiantoSubscription = this._AppGlobal.StatoConnessioneDomotica$
      .subscribe(data => {
        // LoggerService.debug('Evento Stato Domotica Changed ricevuto: Nuovo Stato: '+data);
      });
  }

  ngOnDestroy() {

    this.StatoImpiantoSubscription.unsubscribe();
    LoggerService.eventUnSubscribed('APP.COMPONENT', 'StatoImpiantoSubscription');

    this._socketDomotica.statoSeriale$.unsubscribe();
    LoggerService.eventUnSubscribed('APP.COMPONENT', 'statoSeriale$');

    this._socketDomotica.statoSistemaDomotica$.unsubscribe();
    LoggerService.eventUnSubscribed('APP.COMPONENT', 'statoSistemaDomotica$');
  }




  public menuToggle() {
    let ele = $('#paginaPrincipale');
    if (ele.hasClass('nav-md')) {
      ele.removeClass('nav-md');
      ele.addClass('nav-sm');
    } else {
      ele.removeClass('nav-sm');
      ele.addClass('nav-md');
    }



  }

/**
 * Click del menu per la gestione del layout
 * 
 * @param {*} event
 * 
 * @memberOf AppComponent
 */
  public menuClick(event: any) {
    let tt = event.currentTarget.id;
    let h = $('#' + tt);
    let li = h.parent();
    LoggerService.debug('Premuto bottone menu: ' + tt);
    let listamenu = h.next('ul');
    listamenu.toggleClass('child_menu');
    li.toggleClass('active');

  }
}
