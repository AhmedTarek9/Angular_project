import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
new Product(1,"Laptops",300,"wmcdme","emflemvdslmskm","assets/product1.jpg"),
new Product(2,"macnook",100,"wmcdmeavkdesnknvn","emflemsjevnjesrjvr","assets/product2.jpg"),
new Product(3,"mobile",500,"wmcdmeaevsmksnrvnk","emflemkeasvmkrndsed","assets/product3.jpg"),
new Product(4,"headphone",300,"wmcdme","emflemvdslmskm","assets/product4.jpg"),
new Product(5,"watch",100,"wmcdmeavkdesnknvn","emflemsjevnjesrjvr","assets/product5.jpg"),
new Product(6,"Tv",500,"wmcdmeaevsmksnrvnk","emflemkeasvmkrndsed","assets/product6.jpg"),
new Product(7,"resever",300,"wmcdme","emflemvdslmskm","assets/product7.jpg"),
new Product(8,"sataliet",100,"wmcdmeavkdesnknvn","emflemsjevnjesrjvr","assets/product8.jpg"),
new Product(9,"dm",500,"wmcdmeaevsmksnrvnk","emflemkeasvmkrndsed","assets/product9.jpg"),
  ];
  constructor() { }

  getproducts() :Product[] {
return this.products
  }
}


