import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { Usercard2Component } from './usercard2/usercard2.component';
import { Usercard3Component } from './usercard3/usercard3.component';


@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    ListUsersComponent,
    UserCardComponent,
    Usercard2Component,
    Usercard3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
