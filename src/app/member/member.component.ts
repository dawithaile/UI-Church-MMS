import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../service/meeting.service';
import { Meeting } from '../model/meeting';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  private data  : Meeting;

  constructor(private meetingService : MeetingService) { }

  ngOnInit() {
    this.getMeetingById();
  }

  getMeetingById(){
    this.meetingService.getMeetingById("12").subscribe(
      result => {
        this.data = result;
       });
  }
}
