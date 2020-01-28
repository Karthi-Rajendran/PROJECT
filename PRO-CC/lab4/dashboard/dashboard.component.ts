import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mydashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mydashboard: any = null;

  constructor() { }

  ngOnInit() {
    this.mydashboard = {
      leads: {
        leadCount: 5,
        showLeads: true,
        leadsList: [
          {'leadId': 101, 'name': 'Ned Stark', 'email': 'ned@cc.com', phone: 1111, 'status': 'New'},
          {'leadId': 102, 'name': 'Robb Stark', 'email': 'robb@cc.com', phone: 222, 'status': 'New'},
          {'leadId': 103, 'name': 'Brandan Stark', 'email': 'brandan@cc.com', phone: 333, 'status': 'New'},
          {'leadId': 104, 'name': 'Sansa Stark', 'email': 'sansa@cc.com', phone: 444, 'status': 'New'},
          {'leadId': 105, 'name': 'Arya Stark', 'email': 'arya@cc.com', phone: 555, 'status': 'New'}
        ]
      },
      enrollments: {
        enrollmentCount: 9,
        showEnrollments: true,
        enrollmentsList: [
          {'sid': 101, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 102, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 103, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 104, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 105, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 106, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 107, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 108, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 109, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 110, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
          {'sid': 111, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000}
        ]
      }
    }
  }

}
