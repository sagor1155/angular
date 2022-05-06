import { Component, OnInit } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public message: string = "default message"

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  onTest(){
    console.log('test button clicked')
    this.pubService.publishMessage(this.message)
  }

}
