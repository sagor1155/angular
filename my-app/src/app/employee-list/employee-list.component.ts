import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: IEmployee[] = [];
  public errMessage: any;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getList()
      .subscribe(data => this.employeeList=data,
                error => this.errMessage=error)
  }

}
