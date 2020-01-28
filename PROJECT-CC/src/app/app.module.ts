import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';

import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list/course-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './dashboard/leads/leads.component';
import { EnrollmentsComponent } from './dashboard/enrollments/enrollments.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    CourseComponent,
    CourseListComponent,
    DashboardComponent,
    LeadsComponent,
    EnrollmentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
