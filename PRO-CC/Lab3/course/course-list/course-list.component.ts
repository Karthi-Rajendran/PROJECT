import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() MyCourseList;

  constructor() { }

  ngOnInit() { }

  getCourseInfo(course: Course) {
    alert("Hi Course Name: "+course.cname+" Cost: "+course.cost);
  }

}
