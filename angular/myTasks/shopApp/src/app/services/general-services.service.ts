import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralServicesService {
  constructor() {}

  alert(message: string) {
    window.alert(message);
  }
}
