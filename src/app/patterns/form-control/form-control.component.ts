import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  query: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .subscribe(
        (searchTerm) => {
          this.query.emit(searchTerm);
        }
      )
  }

}
