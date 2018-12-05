import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [{label: 'Home', path: '/home'},{label: 'About', path: '/about'}]
  title = 'greg-site';
}
