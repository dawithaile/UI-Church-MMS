import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { MeetingComponent } from './meeting/meeting.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"members", component: MemberComponent},
  {path:"meeting", component: MeetingComponent},
  {path:"**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
