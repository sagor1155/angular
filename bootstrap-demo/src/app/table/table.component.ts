import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: any = [
    {
      id: 1,
      firstName: "Clark",
      lastName: "Kent",
      email: "clarkkent@mail.com",
    },
    {
      id: 2,
      firstName: "Peter",
      lastName: "Parker",
      email: "peterparker@mail.com",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Carter",
      email: "johncarter@mail.com",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
