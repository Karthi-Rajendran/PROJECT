import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ManageCampsService} from '../manage-campgrounds.service';
import {Camp} from './camp.model';
import { Response } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient  ,  private allCampsService: ManageCampsService  ){}

  storeCamps(){
    return this.http.put( 'https://yelpcamp-angular-4.firebaseio.com/camps.json' , this.allCampsService.getAllCamps() );
  }

  getCamps(){
    this.http.get('https://yelpcamp-angular-4.firebaseio.com/camps.json').subscribe(
      (response : Response)=>{
        const camps: Camp[] = response.json();
        this.allCampsService.setCamps( camps );
        console.log(camps);
      }
    );
  }


}
