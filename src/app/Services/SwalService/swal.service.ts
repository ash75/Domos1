

import { Injectable } from '@angular/core';







@Injectable()
export class SwalService {

  constructor() { }

  static warn(message: string): any {
    return swal({
      title: 'Attenzione',
      text: message,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    })
  }
}
