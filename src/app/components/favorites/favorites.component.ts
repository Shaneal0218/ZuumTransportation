import { Component } from '@angular/core';
import { User } from '../../models/user.model'

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent {
  user: User = {username: "", password: ""};

  login() {
    console.log(this.user);
  }
}
