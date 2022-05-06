import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagePublishService {
  private obs = new Subject<string>()

  constructor() { }

  publishMessage(msg: string) {
    this.obs.next(msg)
  }

  getSubject(): Observable<string>{
    return this.obs
  }

}
