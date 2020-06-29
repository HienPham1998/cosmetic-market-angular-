import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServiceAPI } from 'src/app/core/constants/service-api';
import { AuthService } from 'src/app/core/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'https://conduit.productionready.io/api/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(body) {
    return this.http.post(this.url + '/login', body);
  }

  handleAfterLoginSuccess(accessToken, userInfo) {
    this.authService.setAccessToken(accessToken);
    this.authService.setUserInfo(userInfo);
  }

  register(body) {
    return this.http.post(this.url, body);
  }

}
