import { Component } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private dataList: MockDataService,
  ) {
  }

  private itemsListLeft;
  private itemsListRight;
  private filters;
  ngOnInit() {
    this.itemsListLeft = this.dataList.getItems(10);
    this.itemsListRight = this.dataList.getItems(10);
    this.filters = this.dataList.getFilterList()
  }


}
