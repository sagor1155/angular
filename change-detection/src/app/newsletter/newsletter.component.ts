import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-data';

@Component({
  selector: 'app-newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="newsletter">
    <legend>Newsletter</legend>    
    <h5>Hello {{(user$ | async)?.firstName}}, enter your email below to subscribe:</h5>

    <div class="input-group mb-3">
      <input #email type="email" name="email" class="form-control" placeholder="Enter your Email" aria-label="Enter your Email" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button (click)="subscribeToNewsletter(email.value)" class="btn btn-outline-secondary" type="button">Subscribe</button>
      </div>
    </div> 
  </fieldset>
  `,
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  @Input() 
  user$?: Observable<User>;

  @Output()
  subscribe = new EventEmitter();

  ngOnInit(): void {
  }

  subscribeToNewsletter(email: string){
    this.subscribe.emit(email);
  }

}
