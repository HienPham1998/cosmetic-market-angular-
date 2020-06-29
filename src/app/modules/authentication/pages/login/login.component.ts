import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // const {email,password} = this.logForm.value;
    const body = {
      user: this.logForm.value
    }
    this.authService.login(body).subscribe(response => {
      if (response) {
        const userInfo = {
          email: response['email'],
          username: response['username'],
          image: response['image']
        }
        this.authService.handleAfterLoginSuccess(response['tokenUser'], userInfo)
      }
      this.router.navigate(['/']);
    })
  }
}
