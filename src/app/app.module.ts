import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparsaListComponent } from './components/comparsa-list/comparsa-list.component';
import { PcomparsaPipe } from './pipes/pcomparsa.pipe';
import { DcomparsaDirective } from './directives/dcomparsa.directive';
import { FormsModule } from '@angular/forms';
import { JuradoComponent } from './components/jurado/jurado.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparsaListComponent,
    PcomparsaPipe,
    DcomparsaDirective,
    JuradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
