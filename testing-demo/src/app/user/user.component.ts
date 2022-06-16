import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { name: string; email: string } = {name: '', email: ''};
  userLoggedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
