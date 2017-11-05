import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  links: any;

  constructor() { }

  ngOnInit() {
    this.links = [
      {
        path: '/home',
        title: 'Home'
      },
      {
        path: '/products',
        title: 'All Products'
      }
    ];
  }

}
