import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {

  @Input('sortItems') data
  @Input('method') sortMethod
  constructor() { }

  sortData(increase) {
    this.data = this.data.sort((a, b) => {
      if (increase) {
        return a[this.sortMethod] > b[this.sortMethod] ? 1 : -1 // в алфавитном порядке
      } else {
        return a[this.sortMethod] > b[this.sortMethod] ? -1 : 1
      }
    })
  }

}
