import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() MyStudentList;
  @Input() MyBid;
  constructor() { }

  ngOnInit() {
  }

}
