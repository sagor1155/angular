import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "" }, // add this line otherwise 
  { path: "dept", component: DepartmentListComponent },
  { 
    path: "dept/:id", 
    component: DepartmentDetailComponent,
    children: [
      {path: "overview", component: DepartmentOverviewComponent},
      {path: "contact", component: DepartmentContactComponent}
    ]
  },
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
  DepartmentDetailComponent,
  PageNotFoundComponent
]