import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ManageCampsService} from '../manage-campgrounds.service';
import {Camp} from './camp.model';
import { Response } from '@angular/http';
import { Subject } from 'rxjs';

import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  

  constructor(private http: HttpClient, private allCampsService: ManageCampsService  ){}

  storeCamps(){
    const allcamps = this.allCampsService.getAllCamps();
    return this.http.put('https://ng-camps.firebaseio.com/camps.json',
           allcamps
        )
        .subscribe(response => {
          console.log(response);          
        }); 
  }

  
  getCamps() {
    this.http.get<Camp[]>('https://ng-camps.firebaseio.com/camps.json')
      .subscribe(allcamps => {
        this.allCampsService.setCamps(allcamps);  
      });
  }

  
}
