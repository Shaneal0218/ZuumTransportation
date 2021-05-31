import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router) {}

  user: User = {username: "", password: ""};

  login() {
    console.log(this.user);
    this.router.navigate(['/home']);
  }
}
