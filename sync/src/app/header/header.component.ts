import { Component, OnInit } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public message: string = "message from header"

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  onTest(){
    this.pubService.publishMessage(this.message)
  }

}
