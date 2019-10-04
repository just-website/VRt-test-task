import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';
import { FilterItemService } from '../services/filter-item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private dataList: MockDataService,
    private filterData: FilterItemService
  ) {
    this.itemsListLeft = this.dataList.getStoreItems(this.leftList, 100);
    this.itemsListRight = this.dataList.getStoreItems(this.rightList, 100);
    this.rightPanelFilters = this.dataList.getFilterList().map(type => {
      return {
        type,
        active: true
      };
    });
    this.leftPanelFilters = {
      type: 'text',
    };
  }
  private leftList = 'leftList';
  private rightList = 'rightList';
  private lastInputValue;

  private itemsListLeft;
  private filteredItemsListLeft;
  private itemsListRight;
  private filteredItemsListRight;
  private selectedItem;
  private rightPanelFilters;
  private leftPanelFilters;

  ngOnInit() {
    this.filteredItemsListRight = this.filteredItemsListRight = [...this.dataList.getStoreItems(this.rightList)];
    this.filteredItemsListLeft = [...this.dataList.getStoreItems(this.leftList)];
  }

  filteringRightList(event?) {
    const value = event ? event.target.value : '';
    const result = this.rightPanelFilters.map(filter => {
      if (value === filter.type) {
        filter.active = event.target.checked;
      }
      if (!filter.active) {
        return null;
      } else {
        return this.filterData.getFilteredData(this.itemsListRight, filter.type)
      }
    });
    this.filteredItemsListRight = Array.from(new Set(result.filter(element => element !== null).flat()));
  }

  filteringLeftList(event?) {
    const value = event ? event : '';
    this.lastInputValue = value;
    this.filteredItemsListLeft = this.filterData.getFiltedText(this.itemsListLeft, value)
  }

  reinitLists(event) {
    if (event.listName === 'itemsListRight') {
      this.itemsListLeft.splice(this.itemsListLeft.indexOf(event.item), 1);
      this.itemsListRight.push(event.item);
    } else {
      this.itemsListRight.splice(this.itemsListRight.indexOf(event.item), 1);
      this.itemsListLeft.push(event.item);
    }
    this.filteringLeftList(this.lastInputValue);
    this.filteringRightList();
  }

  showInfo(item) {
    this.selectedItem = item;
  }

  setFilteredData($data, target) {
    this[target] = $data;
  }

}
