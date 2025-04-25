import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  imports: [ProductFormComponent, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productObj!: Product;
  receiveData(obj: any) {
    this.productObj = obj;
    console.log(this.productObj);
  }
}
