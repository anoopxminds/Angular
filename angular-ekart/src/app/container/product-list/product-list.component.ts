import { Component, Input, inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/products.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct: Product;

  productService = inject(ProductService);
  products = this.productService.getAllProducts();

  totalProductCount = this.productService.getTotalProductsCount();
  totalProductInstock = this.productService.getNumberOfProdsInStock();
  totalProductOutstock = this.productService.getNumberOfProdsOutStock();
  @Input()
  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string){
    this.selectedFilterRadioButton = value;
  }
}
