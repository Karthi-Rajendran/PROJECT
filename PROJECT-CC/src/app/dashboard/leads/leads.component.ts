import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myleads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  //To receive data & display in respective template i.e leads.component.html
  @Input() LeadsData;
  @Input() ShowLeads;

  constructor() { }

  ngOnInit() {
  }

}
