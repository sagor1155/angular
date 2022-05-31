import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user-data';

const ANONYMOUS_USER: User = {
  firstName: 'Jack',
  lastName: 'Depp'
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.userSubject.asObservable();

  loadUser(user: User){
    this.userSubject.next(user);
  }

}
