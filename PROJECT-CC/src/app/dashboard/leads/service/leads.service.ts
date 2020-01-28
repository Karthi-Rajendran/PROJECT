import { Injectable, RootRenderer } from '@angular/core';
import { Leads } from '../leads.model';

@Injectable({
    providedIn: 'root'
})
export class LeadsService {

    private myleads: Leads;

    public getLeadsData(): Leads {
        return this.myleads;
    }
   
    constructor() {
        this.myleads = new Leads();
        this.myleads = {
            leadsCount: 5,
            leadsShow: true,
            leadsList: [
              {'leadId': 101, 'name': 'Ned Stark', 'email': 'ned@cc.com', phone: 1111, 'course': 'Java'},
              {'leadId': 102, 'name': 'Robb Stark', 'email': 'robb@cc.com', phone: 222, 'course': 'Python'},
              {'leadId': 103, 'name': 'Brandan Stark', 'email': 'brandan@cc.com', phone: 333, 'course': 'Java'},
              {'leadId': 104, 'name': 'Sansa Stark', 'email': 'sansa@cc.com', phone: 444, 'course': 'Angular'},
              {'leadId': 105, 'name': 'Arya Stark', 'email': 'arya@cc.com', phone: 555, 'course': 'Python'}
            ],
        }
    }
}