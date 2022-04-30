import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')||"")
      if (isNaN(id)) {
        console.log("id not a number")
      }else{
        this.departmentId = id
      }
    })
  }

  goPrevious(){
    let previous = this.departmentId-1
    this.router.navigate(["/dept", previous])
  }

  goNext(){
    let next = this.departmentId+1
    this.router.navigate(["/dept", next])
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null
    // this.router.navigate(["/dept", {'id': selectedId}]) // optional route parameter
    this.router.navigate(['../', {'id': selectedId}], {relativeTo: this.route})
  }

}
