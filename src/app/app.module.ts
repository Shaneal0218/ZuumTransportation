import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ContactReducer } from "./reducers/contact.reducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    FavoritesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        contacts: ContactReducer
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
