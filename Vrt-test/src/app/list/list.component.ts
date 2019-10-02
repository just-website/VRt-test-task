import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ItemListComponent {

  @Input('listItems') listItems;
  constructor(
  ) { }

}
