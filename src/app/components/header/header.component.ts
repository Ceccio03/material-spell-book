import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLightTheme: boolean = true;

  changeTheme() {
    this.isLightTheme = !this.isLightTheme;
    document.body.classList.toggle('super-dark');
  }
}
