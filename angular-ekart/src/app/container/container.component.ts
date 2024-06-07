import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
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

  @Input()
  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string){
      this.searchText = value;
  }

}
