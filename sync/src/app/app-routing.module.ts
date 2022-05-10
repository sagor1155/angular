import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "" },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AccountDetailsComponent,
  UserDetailsComponent,
  HomeComponent,
  TestComponent,
  PageNotFoundComponent
]