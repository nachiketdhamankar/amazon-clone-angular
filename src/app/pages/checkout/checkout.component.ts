import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCartItems()
  }

  getShoppingCartLength() {
    return this.shopping_cart.getCartLength();
  }

  getShoppingCartItems() {
    this.items = this.shopping_cart.getShoppingCartItems()
  }

  getTotalFromCart() {
    return this.shopping_cart.getTotal()
  }
  
  deleteEventHandler($event){
    console.log($event)
    this.getShoppingCartItems();
  }
}
