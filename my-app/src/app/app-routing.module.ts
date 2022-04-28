import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "" }, // add this line otherwise 
  { path: "dept", component: DepartmentListComponent },
  { path: "emp", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent } // wildcard routes, MUST be at the bottom of this array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent
]