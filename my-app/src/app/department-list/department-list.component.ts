import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../department';
import { DepartmentService } from '../department.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: IDepartment[] = [];
  public errMessage: any;
  public selectedId: any;
  constructor(private _departmentService: DepartmentService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._departmentService.getList()
                           .subscribe(data => this.departments=data,
                            error => this.errMessage=error )

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')||"")
      if (isNaN(id)) {
        console.log("id not a number")
      }else{
        this.selectedId = id
      }
    })
  }

  onSelect(department: IDepartment){
    // this._router.navigate(["/dept", department.id])
    this._router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department: IDepartment) {
    return department.id === this.selectedId
  }

}
