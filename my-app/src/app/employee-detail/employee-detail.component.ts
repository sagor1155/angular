import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList: IEmployee[] = []
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getList()
      .subscribe(data => this.employeeList=data)
  }

}
