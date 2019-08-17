import { Component } from '@angular/core';
import { MeetingService } from './service/meeting.service';
import { Meeting } from './model/meeting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI-Church-MMS';
  private data : Meeting;

  constructor(private meetingService : MeetingService){
      this.data=new Meeting();
  }

  getMeetingById(){
    this.meetingService.getMeetingById("12").subscribe(
      result => {
        this.data = result;
        console.log("Result Data :" + this.data.address1);
       });
  }

  createMeeting(){
    this.data.address1 = "1234 sample";
    this.data.agenda = "Discusion";
    this.data.cellPhone = "1234 sample";
    this.data.city = "Discusion";
    this.data.state = "1234 sample";
    this.data.email = "Discusion";
    this.data.zipCode = "1234 sample";
    this.data.title = "Discusion";
    
    this.meetingService.createMeeting(this.data).subscribe(
      result => {
        this.data = result;
        console.log("Result Data :" + this.data.address1);
       });
  }

}
