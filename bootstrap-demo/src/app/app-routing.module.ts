import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerGridComponent } from './container-grid/container-grid.component';
import { FormsComponent } from './forms/forms.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: 'grid', component: ContainerGridComponent },
  { path: 'lists', component: ListGroupComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'tables', component: TableComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'input-group', component: InputGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
