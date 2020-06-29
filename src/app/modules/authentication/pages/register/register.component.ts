import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  });
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const body = {
      user: this.regForm.value
    }
    this.authService.register(body).subscribe(res => {
      if (res) {
        this.router.navigate(['auth/login']);
      }
    })
  }

}
