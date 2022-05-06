import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagePublishService } from '../message-publish.service'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public msg: string = "default message"

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
    this.pubService.getSubject().subscribe(data => this.msg=data)
  }

}
