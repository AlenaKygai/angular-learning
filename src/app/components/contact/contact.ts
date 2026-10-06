
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  isBlue: boolean = false;

  toggleColor() {
    this.isBlue = !this.isBlue;
  }
}
