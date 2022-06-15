import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Intro Tour';

  constructor(private router: Router){}

  ngOnInit() {}

  onFruitsClicked(){
    this.router.navigate(['/fruits']);
  }

  onBeersClicked(){
    this.router.navigate(['/beers']);
  }

}
