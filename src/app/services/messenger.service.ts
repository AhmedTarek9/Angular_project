import { Injectable } from '@angular/core';
import{Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
subject =new Subject;
  constructor() { }

  sendmsg(Product){
    console.log(Product);
this.subject.next(Product);
  }

  getmsg(){
    return this.subject.asObservable();
  }
}
