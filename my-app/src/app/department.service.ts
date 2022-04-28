import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDepartment } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url: string = "assets/data/department-list.json"
  constructor(private http: HttpClient) { }

  getList(): Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this.url)
                    .pipe(catchError(this.errorHandler))
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
