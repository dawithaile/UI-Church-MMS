import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'
import { MeetingService } from './service/meeting.service';
import { MemberService } from './service/member.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberComponent } from './member/member.component';
import { MeetingComponent } from './meeting/meeting.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MemberComponent,
    MeetingComponent,
    HomeComponent,
    NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MeetingService,MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
