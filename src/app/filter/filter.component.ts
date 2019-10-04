import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input('type') filterType: string;
  @Input('method') filterMethod: string;
  @Output() onChange = new EventEmitter();

  constructor() { }

  filterData(event) {
    this.onChange.emit(event);
  }

}
