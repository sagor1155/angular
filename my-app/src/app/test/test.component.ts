import { Component, Input, Output, EventEmitter } from '@angular/core';

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
export class TestComponent {

  // public name: string = "Daemons";
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
  public highlightColor = 'orange';
  public  titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }
  public msg1: string = "button-1 not clicked"
  public inputMessage = "some msg";
  public displayName = false;
  public color = "blue";
  public colors: Array<string> = ['red', 'green', 'blue', 'yellow'];
  public person = {
    "name": "amanda",
    "email": "amanda@ftdr.com"
  }
  public date = new Date()

  // parent to child data interaction
  @Input("parentData") public name: any;

  // child to parent data interaction
  @Output() public childEvent = new EventEmitter()

  constructor() { }

  // ngOnInit(): void {
  // }

  greetUser(){
    return "Hello! " + this.name.toUpperCase()
  }

  onClick(event: any){
    console.log(event)
    this.msg1 = "button clicked"
    this.hasError = true
  }

  logMessage(msg: string){
    console.log(msg)
  }

  fireEvent(){
    this.childEvent.emit("Hey Codevolution")
  }
}
