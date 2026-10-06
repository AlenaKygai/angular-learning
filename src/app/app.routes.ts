import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Shop } from './components/shop/shop';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'shop',
    component: Shop,
    children: [
      {
        path: 'clothes',
        loadChildren: () => import('./shop/clothes/clothes-module').then((m) => m.ClothesModule),
      },
      {
        path: 'kids-products',
        loadChildren: () =>
          import('./shop/kids-products/kids-products-module').then((m) => m.KidsProductsModule),
      },
      // Якщо хочете, щоб при переході на /shop за замовчуванням відкривався одяг:
      { path: '', redirectTo: 'clothes', pathMatch: 'full' },
    ],
  },
];
