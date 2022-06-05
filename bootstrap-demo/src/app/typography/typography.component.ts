import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  codeHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCodeShow(){
    this.codeHidden = !this.codeHidden;
  }

}
