import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getList(){
    return [
      {"id": 1, "name": "A", "email": "a@example.com"},
      {"id": 2, "name": "B", "email": "b@example.com"},
      {"id": 3, "name": "C", "email": "c@example.com"},
      {"id": 4, "name": "D", "email": "d@example.com"}
    ]
  }
}
