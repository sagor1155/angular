import { Component, OnInit, OnDestroy } from '@angular/core';
import * as introJs from 'intro.js/intro.js';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit, OnDestroy {

  private introJs: any = introJs();
  constructor() { }

  ngOnInit(): void {
    this.introJs.setOptions({
      steps: [
        {
          intro: 'Welcome to IntroJs'
        },
        {
          intro: 'This is step one!',
          element: '#step-1'
        },
        {
          intro: 'This is step two!',
          element: '#step-2'
        },
        {
          intro: 'This is step three!',
          element: '#step-3'
        }
      ]
    })
  }

  ngOnDestroy(): void {
    console.log('OnDestroy component - BeersComponent');
    this.introJs.exit();
  }

  startTour(){
    this.introJs.start();
  }

}
