import { Component, OnInit } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  public message: string = "message from publisher"

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  onTest(){
    this.pubService.publishMessage(this.message)
  }

}
