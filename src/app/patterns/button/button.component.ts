import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classes: any;
  @Input() label: any;
  @Output() clickEvent: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.clickEvent.emit(true);
  }

}
