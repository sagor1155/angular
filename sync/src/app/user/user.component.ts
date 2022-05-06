import { Component, OnInit } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public msg: string = "default message"

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  subscribe(){
    this.pubService.getSubject().subscribe(data => this.msg=data)
  }

}

