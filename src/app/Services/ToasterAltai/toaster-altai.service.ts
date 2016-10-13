import { Injectable } from '@angular/core';

@Injectable()
export class ToasterAltaiService {

  constructor() { }


  static success(message: string){
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
      //containerId: 'titolo'

    };

    //toastr.options.positionClass='toast-bottom-right';
    toastr['success'](message);
  }
}
