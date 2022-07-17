import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component"
import { UserComponent } from "./components/user/user.component";
import { DetailsComponent } from './components/details/details.component';

import { UserService } from "./services/user.service";
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: DetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DetailsComponent,
    NavbarComponent,
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
