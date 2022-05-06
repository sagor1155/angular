import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = '/assets/data/employees.json'
  constructor(private http: HttpClient) { }

  getList(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
