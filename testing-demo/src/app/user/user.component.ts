import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { name: string; email: string } = {name: '', email: ''};
  userLoggedIn = false;
  data: string | undefined;

  constructor(private userService: UserService, private dataService: DataService) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }
}
