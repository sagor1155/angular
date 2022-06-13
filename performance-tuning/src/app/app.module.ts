import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component';
import { GetSymbolPipe } from './get-symbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsingPipesComponent,
    GetSymbolPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
