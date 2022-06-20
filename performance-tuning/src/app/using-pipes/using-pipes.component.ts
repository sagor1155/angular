import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UsingPipesComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  elements: { symbol: string }[] = [
    { symbol: 'H' },
    { symbol: 'He' },
    { symbol: 'Li' },
    { symbol: 'Be' }
  ]

  constructor() { }

  ngOnChanges() {
    console.log('Trace OnChanges');
  }

  ngOnInit() {
    console.log('Trace onInit');
  }

  ngDoCheck() {
    console.log('Trace doCheck');
  }

  ngAfterContentInit() {
    console.log('Trace After Content Init');
  }

  ngAfterContentChecked() {
    console.log('Trace after content checked');
  }

  ngAfterViewInit() {
    console.log('Trace after view init');
  }

  ngAfterViewChecked() {
    console.log('Trace after view checked');
  }

  ngOnDestroy() {
    console.log('Trace on destroy');
  }

  getFullSymbol(symbol: string): string {
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
