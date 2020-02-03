import {Camp} from './shared/camp.model';
import { Subject } from 'rxjs/Subject';

export class ManageCampsService{

   campsChanged = new Subject<Camp[]>();
   private campgrounds: Camp[] = [];

  //  private campgrounds : Camp [] =[
	// 	new Camp ('camp1'  , 'This is the first camp' , 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' , 1),
	// 	new Camp ('camp2'  , 'This is the second camp' , 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' , 2),
	// 	new Camp ('camp3'  , 'This is the Third camp' , 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' , 3),
	// 	new Camp ('camp4'  , 'This is the Fourth camp' , 'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' , 4)
	// ];

		constructor () {}

		getAllCamps(){			
			return this.campgrounds.slice();
		}

		getCamp(id:number){
		  const camp = this.campgrounds.find(
        (s) => {
          return s.id === id;
        }
      );
		  return camp;
    }

    addCamp(newCamp:Camp){
		  this.campgrounds.push(newCamp);
      this.campsChanged.next(this.campgrounds.slice());
    }

    updateCamp(index:number , newCamp:Camp){
      this.campgrounds[index] = newCamp;
      this.campsChanged.next(this.campgrounds.slice());
    }

    deleteCamp(index:number){
      console.log("deleting" + index);
      this.campgrounds.splice((index-1),1);
      this.campsChanged.next(this.campgrounds.slice());
    }

    setCamps(camps: Camp[]){
      this.campgrounds = camps;
      this.campsChanged.next(this.campgrounds.slice());
    }

}




