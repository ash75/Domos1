import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {LocalStorageService} from "../Services/LocalStorage/local-storage.service";
import {LoggerService} from "../Services/Logger/logger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-configurazione-impianto',
  templateUrl: './configurazione-impianto.component.html',
  styleUrls: ['./configurazione-impianto.component.css']
})
export class ConfigurazioneImpiantoComponent implements OnInit, OnDestroy, AfterViewInit {
  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    Materialize.updateTextFields();
  }
  private data: IServerConf;
  private endPointServerRest;
  private endPointServerSocket;

  constructor(private _router: Router) {
    this.data = LocalStorageService.serverConf;


  }


  onSubmit(){
         LocalStorageService.saveServerConf(this.data);
         LoggerService.debug('Configurazione Salvata con successo')
         this._router.navigate(['/dashboard'])
  }

  ngOnInit() {
  }

}
