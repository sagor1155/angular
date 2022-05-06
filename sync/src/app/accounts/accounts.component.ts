import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagePublishService } from '../message-publish.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {

  public msg: string = "default message"
  public subscription: any;

  constructor(private pubService: MessagePublishService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription != null){
      console.log('unsubscribed')
      this.subscription.unsubscribe()
    }
    console.log('component destroy')
  }  

  subscribe(){
    this.subscription = this.pubService.getSubject().subscribe(data => this.msg=data)
  }

  //TODO: add routing, route to different page and unsubscribe on component destroy
  showDetails(){
    this.router.navigate(['account-details'])
  }
}
