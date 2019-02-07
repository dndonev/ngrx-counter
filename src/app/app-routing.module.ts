import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'other',
    component: OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
