import { Component } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  user: User = {username: "", password: ""};

  login() {
    console.log(this.user);
  }
}
