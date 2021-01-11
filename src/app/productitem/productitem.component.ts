import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
@Input() productitem : Product 

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handlcart(){    
    this.msg.sendmsg(this.productitem);
  }

}
