import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service';
import { UserService } from '../services/user.service';
import { User } from '../user-data';

@Component({
  selector: 'app-home',
  template: `
    <app-newsletter [user$]="userService.user$" (subscribe)="subscribe($event)"></app-newsletter>
    <button (click)="changeUserName()" class="btn btn-success">Change Username</button>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService
    ) { }

  ngOnInit(): void {
  }

  subscribe(email: string){
    this.newsletterService.subscribe(email);
  }

  changeUserName(){
    this.userService.loadUser({firstName: 'Uncle Bob', lastName: 'Smith'})
  }

}
