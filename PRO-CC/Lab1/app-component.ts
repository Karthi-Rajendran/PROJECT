import { Component } from '@angular/core';
import { Course } from './course.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PROJECT-CC';

  //Properties
  cname: string = "Angular 7";
  cost: number = 20000;
  trainer: string = "Srinivas Dande";
  startDate: Date = new Date();
  isOnline: boolean = false;

  //Objects
  course: Course ={
    cname: "Angular 7",
    cost: 20000,
    trainer: "Srinivas Dande",
    duration: '25Hrs',
  }

  //Arrays
  courseNames: string[] = ["Angular 7", "Node JS", "MongoDB", "Express JS", "React JS"];

  //Lists
  mycourses: Course[] = [
    { cname: "Angular 7", cost: 20000, trainer: "Srinivas Dande", duration: '25Hrs' },
    { cname: "Node JS", cost: 5000, trainer: "Srinivas Dande", duration: '10Hrs' },
    { cname: "MongoDB", cost: 6000, trainer: "Srinivas Dande", duration: '5Hrs' },
    { cname: "Express JS", cost: 4000, trainer: "Srinivas Dande", duration: '5Hrs' },
  ];

  showMessage1() {
    alert("You clicked on Button");
  }

  showMessage2(name: string, email: string) {
    alert("Hi "+name+"Your Email is "+email);
  }

  getCourseInfo(course: Course){
    alert("Hi Course name: "+course.cname+"Cost: "+course.cost);
  }
}
