import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagePublishService {
  private obs = new BehaviorSubject<string>("initial value")

  constructor() { }

  publishMessage(msg: string) {
    this.obs.next(msg)
  }

  getSubject(): Observable<string>{
    return this.obs.asObservable()
  }

}
