import { Injectable } from '@angular/core';
import { Dashboard } from '../dashboard.model';
import { LeadsService } from '../leads/service/leads.service';
import { EnrollmentsService } from '../enrollments/service/enrollments.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardTitle: string = null;
  //private dashboardData: any = null;
  private dashboardData: Dashboard = null;
  
  public getDashboardTitle(): string {
    return this.dashboardTitle;
 }

  public getDashboardData(): Dashboard {
    return this.dashboardData;
  }
  
  constructor(private myLeadsService: LeadsService,
              private myEnrollmentsService: EnrollmentsService) {
        this.dashboardTitle = "My Dashboard Service - ON";
        this.dashboardData = new Dashboard();
        this.dashboardData.leads = myLeadsService.getLeadsData();
        this.dashboardData.enrollments = myEnrollmentsService.getEnrollmentsData();          
  } 
}
