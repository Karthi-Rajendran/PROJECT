import { Component, OnInit } from '@angular/core';
import { Course } from './course.model'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

mycourses: Course[]=null;

  constructor() {
    this.mycourses = [
      { cname: "Angular 7", cost: 20000, trainer: "Srinivas Dande", duration: '25Hrs' },
      { cname: "Node JS", cost: 5000, trainer: "Srinivas Dande", duration: '10Hrs' },
      { cname: "MongoDB", cost: 6000, trainer: "Srinivas Dande", duration: '5Hrs' },
      { cname: "Express JS", cost: 4000, trainer: "Srinivas Dande", duration: '5Hrs' },
    ];
   }

  ngOnInit() {
  }

}
