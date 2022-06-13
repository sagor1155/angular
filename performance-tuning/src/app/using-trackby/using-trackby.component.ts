import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-trackby',
  templateUrl: './using-trackby.component.html',
  styleUrls: ['./using-trackby.component.css']
})
export class UsingTrackbyComponent implements OnInit {

  elements: { symbol: string }[] = []

  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.elements = [
      { symbol: 'H' },
      { symbol: 'He' },
      { symbol: 'Li' },
      { symbol: 'Be' }
    ] 
  }

  updateData(){
    this.elements = [...this.elements,
      { symbol: 'Be' },
      { symbol: 'Li' },
      { symbol: 'He' },
      { symbol: 'H' }
    ]
  }

  trackByFn(index: any, item: any) { 
    return index; 
}

}
