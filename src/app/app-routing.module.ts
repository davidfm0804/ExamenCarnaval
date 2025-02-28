import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparsaListComponent } from './components/comparsa-list/comparsa-list.component';
import { JuradoComponent } from './components/jurado/jurado.component';

const routes: Routes = [
  {path:'comparsa',component:ComparsaListComponent},
  {path:'jurado',component:JuradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
