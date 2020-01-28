import { Injectable } from '@angular/core';
import { Enrollments } from '../enrollments.model';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentsService {
    private myenrollments: Enrollments = null;

    public getEnrollmentsData(): Enrollments {
      return this.myenrollments;
   }
  
    constructor() {
        this.myenrollments = new Enrollments();
        this.myenrollments = {
            enrollmentsCount: 8,
            enrollmentsShow: true,
            enrollmentsList: [
              {'sid': 101, 'sname': 'Ned', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 102, 'sname': 'Arya', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 103, 'sname': 'Jon', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 104, 'sname': 'Robb', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 105, 'sname': 'Sansa', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 106, 'sname': 'Ghost', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 107, 'sname': 'Drogon', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              {'sid': 108, 'sname': 'Khal', 'email': 'ned@cc.com', phone: 111, 'course': 'Java', 'feepaid': 10000, 'feebal': 1000},
              ],
          }
        }  
}

