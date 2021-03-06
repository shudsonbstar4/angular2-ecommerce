import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/shudsonbstar4')
      .subscribe(
        (response) => {

        },
        (error) => {
          this.handleError(error);
        }
      )
  }

  handleError(error) {

  }

}
