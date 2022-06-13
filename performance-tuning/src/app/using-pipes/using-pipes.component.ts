import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css']
})
export class UsingPipesComponent implements OnInit, OnChanges {

  elements: {symbol: string}[] = [
    { symbol: 'H' },
    { symbol: 'He' },
    { symbol: 'Li' },
    { symbol: 'Be' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getFullSymbol(symbol: string): string{
    console.log('calling getFullSymbol');
    let fullSymbol = '';
    switch (symbol) {
      case 'H':
        fullSymbol = 'Hydrogen';
        break;
      case 'He':
        fullSymbol = 'Helium';
        break;
      case 'Li':
        fullSymbol = 'Lithium';
        break;
      case 'Be':
        fullSymbol = 'Beryllium';
        break;
      case 'B':
        fullSymbol = 'Boron';
        break;
      default:
        break;
    }
    return fullSymbol;
  }

}
