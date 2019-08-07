import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'list-user', component: ListUsersComponent},
  {path: '**', component: MyBarChartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
