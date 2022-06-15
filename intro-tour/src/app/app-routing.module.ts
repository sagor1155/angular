import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [
  {
    path: 'fruits', component: FruitsComponent
  },
  {
    path: 'beers', component: BeersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
