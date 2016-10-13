import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InitComponentComponent } from './init-component/init-component.component';
import { LoginComponent } from './login/login.component';
import { LoggerService} from "./Services/Logger/logger.service";
import { DomoticaSocketService} from "./Socket/domotica-socket.service";
import { AltaiRestService} from "./Services/RESTClient/altai-rest.service";
import { RouterModule }   from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {AppGlobalDataService} from "./Services/AppGlobalService/app-global-data.service";
import { ComandiManualiComponent } from './comandi-manuali/comandi-manuali.component';
import { ConfigurazioneImpiantoComponent } from './configurazione-impianto/configurazione-impianto.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StatoImpiantoComponent } from './stato-impianto/stato-impianto.component';
import {VoiceCommandsService} from "./Services/VoiceCommands/voice-commands.service";
import {LocalStorageService} from "./Services/LocalStorage/local-storage.service";
import {SwalService} from "./Services/SwalService/swal.service";
import {ToasterAltaiService} from "./Services/ToasterAltai/toaster-altai.service";
import { ToasterAltaiComponent } from './toaster-altai/toaster-altai.component';
import { ListaDevicesDomoticaComponent } from './lista-devices-domotica/lista-devices-domotica.component';
import { TestsVariComponent } from './tests-vari/tests-vari.component';
import { DeviceBluetoothComponent } from './device-bluetooth/device-bluetooth.component';





@NgModule({
  declarations: [
    AppComponent,
    InitComponentComponent,
    LoginComponent,
    DashBoardComponent,
    ComandiManualiComponent,
    ConfigurazioneImpiantoComponent,
    ErrorPageComponent,
    StatoImpiantoComponent,
    ToasterAltaiComponent,
    ListaDevicesDomoticaComponent,
    TestsVariComponent,
    DeviceBluetoothComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashBoardComponent
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: 'errorpage',
        component: ErrorPageComponent
      },
      {
        path: 'configurazioneImpianto',
        component: ConfigurazioneImpiantoComponent
      },
      {
        path: 'comandiManuali',
        component: ComandiManualiComponent
      },
      {
        path: 'statoImpianto',
        component: StatoImpiantoComponent
      },
      {
        path: 'testvari',
        component: TestsVariComponent
      }
    ])
  ],
  providers: [LoggerService,
    DomoticaSocketService,
    AltaiRestService,
    AppGlobalDataService,
    VoiceCommandsService,
    LocalStorageService,
    SwalService,
  ToasterAltaiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    // Carico le configurazioni generali
    LocalStorageService.getServerConfFromStorage();
    LocalStorageService.getConfigurazioneGeneraleFromStorage();
  }
}
