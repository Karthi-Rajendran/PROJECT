import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Camp } from './shared/camp.model';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({providedIn: 'root'})

export class CampgroundsResolveService implements Resolve<Camp[]> {
    
   
    constructor(private dataStorageService: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Camp[] | import("rxjs").Observable<Camp[]> | Promise<Camp[]> {
        throw new Error("Method not implemented.");
    }
    
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.dataStorageService.getCamps();
    // }
}