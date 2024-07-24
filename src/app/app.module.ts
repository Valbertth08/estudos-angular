import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './_components/footer/footer.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { UsersComponent } from './_components/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { UserCardComponent } from './_components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    BaseUiComponent,
    UsersComponent,
    UserComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
