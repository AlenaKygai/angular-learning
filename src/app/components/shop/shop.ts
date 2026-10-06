import { Component } from '@angular/core';
import { ClothesModule } from '../../shop/clothes/clothes-module';
import { KidsProductsModule } from '../../shop/kids-products/kids-products-module';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ClothesModule, KidsProductsModule, RouterOutlet],
  selector: 'app-shop',
  styleUrl: './shop.scss',
  templateUrl: './shop.html',
})
export class Shop {}
