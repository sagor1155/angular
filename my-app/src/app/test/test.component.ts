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

  public name: string = "Daemons";
  public siteUrl: string = window.location.href;
  public myId: string = "testId";
  public isDisabled: boolean = true;
  public successClass = "text-success";
  public dangerClass = "text-danger";
  public specialClass = "text-special";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial 
  };

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello! " + this.name.toUpperCase()
  }

}
