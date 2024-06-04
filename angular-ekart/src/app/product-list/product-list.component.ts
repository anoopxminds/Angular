import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //name = "Anoop";
  addToCart: number = 0;
    product = {
      name : 'Iphone 13 Pro',
      price :  999,
      color:  'Red',
      discount: 8.5,
      inStock: 10,
      pImage: '/assets/images/iphone.png'
    }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onChangeInput(event : any) {
     // this.name = event.target.value;
  }

  decrementCartValue(){
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  increamentCartValue(){
    if (this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }

}
