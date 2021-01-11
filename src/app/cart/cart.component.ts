import { Component, OnInit } from '@angular/core';
import{MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartitem=[];
carttotal=0
  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getmsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartitem) {
      if (this.cartitem[i].productId === product.id) {
        this.cartitem[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartitem.push({
        productId: product.id,
        productname: product.title,
        qty: 1,
        price: product.price
      })
    }
    this.carttotal = 0
    this.cartitem.forEach(item => {
      this.carttotal += (item.qty * item.price)
    })
  }

}