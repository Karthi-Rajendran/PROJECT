import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { Dashboard } from './dashboard.model';

@Component({
  selector: 'mydashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mydashboard: Dashboard;
  mydashboardTitle: string = null;

  constructor(private mydbs: DashboardService) { 
    this.mydashboardTitle = mydbs.getDashboardTitle();
    this.mydashboard = mydbs.getDashboardData();
  }

  ngOnInit() { }

}
