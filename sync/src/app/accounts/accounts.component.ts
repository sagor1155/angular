import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagePublishService } from '../message-publish.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {

  public msg: string = "default message"
  public subscription: any;

  constructor(private pubService: MessagePublishService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe()
    }
  }  

  subscribe(){
    this.subscription = this.pubService.getSubject().subscribe(data => this.msg=data)
  }

}
