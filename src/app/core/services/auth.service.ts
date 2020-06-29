import { Injectable } from '@angular/core';
import { StorageManager } from '../constants/storage-manager';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setAccessToken(accessToken) {
    localStorage.setItem(StorageManager.TOKEN, accessToken);
  }

  getAccessToken() {
    return localStorage.getItem(StorageManager.TOKEN);
  }

  setUserInfo(userInfo) {
    localStorage.setItem(StorageManager.USER_INFO, userInfo);
  }

  getUserInfo() {
    localStorage.getItem(StorageManager.USER_INFO);
  }
}
