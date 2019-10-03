import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input('type') filterType: string;
  @Input('method') filterMethod: string;
  @Input('listItems') data;
  @Output() onFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sortData(event) {
    switch (this.filterType) {
      case ('text'): this.textSort(event);
        break;
    }
    //  === 'text'
    // console.log(this.data);
    // this.data = this.data.filter(element => element.flags.some(flag => flag.includes(event.target.value)));
    // console.log(event.target.type);

  }

  textSort(event) {
    const filteredData = this.data.filter(element => element.name.includes(event.target.value));
    this.onFilter.emit(filteredData);
    console.log(filteredData);

  }

}
