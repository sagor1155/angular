import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSymbol',
  pure: true
})
export class GetSymbolPipe implements PipeTransform {

  transform(symbol: string): string {
    console.log('calling getSymbol pipe');
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
