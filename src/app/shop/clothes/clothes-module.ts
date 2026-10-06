import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kidswear, Menswear, Womenswear } from './components';
import { ClothesRoot } from './components/clothes-root/clothes-root';

@NgModule({
  declarations: [ClothesRoot, Kidswear, Menswear, Womenswear],
  imports: [CommonModule],
  exports: [ClothesRoot, Kidswear, Menswear, Womenswear],
})
export class ClothesModule {}
