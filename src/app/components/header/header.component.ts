import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping_cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {

  }

}
