import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private secretKey = 'aB3dE9FgHi1jKlMn2OpQr5StUvWxYz07'; // use your own secret ket
  constructor() {}

  encryptData(data: any): string {
    const dataString = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(
      dataString,
      this.secretKey
    ).toString();
    return encryptedData;
  }

  decryptData(encryptedData: string): any {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }
}
