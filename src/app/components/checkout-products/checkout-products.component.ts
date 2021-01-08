import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[] = [];
  @Output() delete_event: EventEmitter<any> = new EventEmitter()

  constructor(private shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void { }

  getCheckoutProducts() {
    return JSON.stringify(this.checkout_products)
  }

  removeItem = (item: any) => {
    this.shopping_cart_service.removeItemFromCart(item);
    this.delete_event.emit(item)
  }
}
