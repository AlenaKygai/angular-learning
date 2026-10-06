import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  currentDate: Date = new Date();

  euroRate = 41.2587;

  selectedArticleIndex: number | null = null;

  arrayWithArticles: { title: string; content: string }[] = [
    {
      title: 'article',
      content: 'Content of article',
    },
    {
      title: 'article',
      content: 'Content of article',
    },
    {
      title: 'article',
      content: 'Content of article',
    },
    {
      title: 'article',
      content: 'Content of article',
    },
    {
      title: 'article',
      content: 'Content of article',
    },
    {
      title: 'article',
      content: 'Content of article',
    },
  ];

  countVisitors: number = 0;

  hadlerCountVisitors() {
    this.countVisitors++;
  }

  lastSelectedArticle(index: number) {
    this.selectedArticleIndex = index;
  }
}
