import { Component, OnInit } from '@angular/core';
import { of, Observable, throttleTime, interval, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Angular App';
  public name = "Janathan Volvano"
  public message = ""

  constructor(){}

  ngOnInit(): void {
    // let testInput = document.getElementById('test_input')
  }

  onTest(){
    let obsl: Observable<number> = of(1, 2, 3, 4, 5, 6)
    obsl
      .pipe(filter((n: number)=> n%2 !== 0))
      .pipe(map((value: number) => value*1))
      // .pipe(throttleTime(2000)) // values within this time will be filtered out  
      .subscribe(data => console.log(data))
  
  }
}
