import { Component, OnInit } from '@angular/core';

// decorators 
@Component({
  // selector is used as html tags
  // other ways to define: '.app-test' as class or, '[app-test]' as attribute
  selector: 'app-test', // custom tag
  
  templateUrl: './test.component.html',
  // inline template can be used instead of url 
  // template: `<div>Inline template</div>`,

  styleUrls: ['./test.component.css']  
  // instead of styleUrls we can use 'styles'
  // styles: [`div {color: blue;}`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
