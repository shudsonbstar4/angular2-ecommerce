import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {
  @Input() links: any;

  constructor() { }

  ngOnInit() {
  }

}
