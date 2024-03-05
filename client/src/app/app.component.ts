import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavComponent } from "./layouts/nav/nav.component";
import { AccountService } from './services/account.service';
import { User } from './models/user';
import { HomeComponent } from "./layouts/home/home.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TooltipModule, NavComponent, HomeComponent,RouterLink,FormsModule]
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user:User = JSON.parse(userString);
    this.accountService.setCurrentuser(user);
  }
}
