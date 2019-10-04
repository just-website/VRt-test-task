import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input('type') filterType: string;
  @Input('method') filterMethod: string;
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterData(event) {
    this.onChange.emit(event);
  }

}
