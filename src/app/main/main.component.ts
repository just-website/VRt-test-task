import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private dataList: MockDataService,
  ) {
  }

  private itemsListLeft;
  private filteredItemsListLeft;
  private itemsListRight;
  private filteredItemsListRight;
  private filters;
  private selectedItem;

  ngOnInit() {
    this.itemsListLeft = this.dataList.getItems(100);
    this.itemsListRight = this.dataList.getItems(10);
    this.filteredItemsListRight = [...this.itemsListRight];
    this.filteredItemsListLeft = [...this.itemsListLeft];

    this.filters = this.dataList.getFilterList();
  }

  showInfo(item) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  setFilteredData($data, target) {
    this[target] = $data;
  }

}
