import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit {
  @Input() productitem:Product
products:Product[]=[];
  constructor(private ProductService:ProductService) { }
  ngOnInit(): void {
    this.products = this.ProductService.getproducts();
  }

 

}
