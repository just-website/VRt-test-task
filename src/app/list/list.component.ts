import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ItemListComponent {

  @Input() listItems;
  @Output() selectChanged: EventEmitter<any> = new EventEmitter<any>()
  constructor(
  ) { }

  selectItem(item) {
    this.selectChanged.emit(item);
  }
}
