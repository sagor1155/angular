import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { GetSymbolPipe } from './get-symbol.pipe';
import { UsingTrackbyComponent } from './using-trackby/using-trackby.component';
import { UsingOnPushComponent } from './using-on-push/using-on-push.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingPipesComponent,
    GetSymbolPipe,
    UsingTrackbyComponent,
    UsingOnPushComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
