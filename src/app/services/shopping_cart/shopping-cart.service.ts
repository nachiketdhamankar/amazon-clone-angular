import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

  constructor() { }
  addProduct = (product: any) => {
    let items = this.getShoppingCartItems();
    if (items) {
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    } else {
      this.shopping_cart_items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
  }

  getShoppingCartItems = () => {
    let cart_items = localStorage.getItem("shopping_cart")
    if (cart_items) {
      return JSON.parse(cart_items)
    }
  }

  getCartLength = () => {
    let products = this.getShoppingCartItems();
    return products ? products.length : 0
  }

  getTotal = () => {
    let items = this.getShoppingCartItems();
    return items?.reduce((acc: any, item: any) => acc + item.price, 0)
  }

  removeItemFromCart = (p: any) => {
    let items: object[] = this.getShoppingCartItems();
    const index = items.findIndex(item => item.id == p.id);
    if (index > -1) {
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
  }
}
