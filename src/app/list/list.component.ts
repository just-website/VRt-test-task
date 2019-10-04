import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ItemListComponent {

  @Input() listItems;
  @Input() listName;
  @Output() selectChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMoveItem: EventEmitter<any> = new EventEmitter<any>();
  constructor(
  ) { }

  selectItem(item) {
    this.selectChanged.emit(item);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      this.onMoveItem.emit({
        item: event.item.data,
        listName: this.listName
      });
    }
  }
}
