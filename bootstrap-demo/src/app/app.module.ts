import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { ContainerGridComponent } from './container-grid/container-grid.component';
import { TypographyComponent } from './typography/typography.component';
import { TableComponent } from './table/table.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapExampleComponent,
    ContainerGridComponent,
    TypographyComponent,
    TableComponent,
    ListGroupComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }