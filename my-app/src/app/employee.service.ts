import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/assets/data/employees.json'
  constructor(private http: HttpClient) { }

  getList(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
}
