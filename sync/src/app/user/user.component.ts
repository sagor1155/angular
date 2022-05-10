import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  public msg: string = "default message"
  private subscription: any;

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  subscribe(){
    this.subscription = this.pubService.getSubject().subscribe(data => this.msg=data)
  }

}

