import { Component, OnInit } from '@angular/core';
import {SwalService} from "../Services/SwalService/swal.service";
import {LoggerService} from "../Services/Logger/logger.service";

@Component({
  selector: 'app-comandi-manuali',
  templateUrl: './comandi-manuali.component.html',
  styleUrls: ['./comandi-manuali.component.css']
})
export class ComandiManualiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendDiscovery(){
    SwalService.warn('Inviare il comando? ').then((data)=>{
      LoggerService.debug('Invio comando senddiscovery');
    }).catch((data)=>{
      LoggerService.debug('Cancellato invio');
    });
  }
}
