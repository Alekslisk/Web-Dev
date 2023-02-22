import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  share(url: string) {
    var sharelink = url;
    window.open(sharelink);
  }
  onNotify() {
    window.alert('You are notified!');
  }
}