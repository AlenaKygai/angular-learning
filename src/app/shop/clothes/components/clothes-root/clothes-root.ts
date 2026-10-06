import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes-root',
  styleUrl: './clothes-root.scss',
  templateUrl: './clothes-root.html',
})
export class ClothesRoot {
  activeTab: 'womens' | 'mens' | 'kids' = 'womens';

  setTab(tab: 'womens' | 'mens' | 'kids') {
    this.activeTab = tab;
  }
}
