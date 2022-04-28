import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: IDepartment[] = [];
  public errMessage: any;
  constructor(private _departmentService: DepartmentService, private _router: Router) { }

  ngOnInit(): void {
    this._departmentService.getList()
                           .subscribe(data => this.departments=data,
                            error => this.errMessage=error )
  }

  onSelect(department: IDepartment){
    this._router.navigate(["/dept", department.id])
  }

}
