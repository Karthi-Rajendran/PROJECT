import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myenrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {

  //To receive data & display in respective ttemplate i.e leads.component.html
  @Input() EnrollmentData;
  @Input() ShowEnrollments;

  constructor() { }

  ngOnInit() {
  }

}
