import { Component } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  user: User = {username: "", password: ""};

  login() {
    console.log(this.user);
  }
}
