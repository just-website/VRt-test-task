import { Injectable } from '@angular/core';
import { FilterListService } from './filter-list.service';

interface Item {
  name: string;
  flags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor(
    private filters: FilterListService
  ) { }
  public getItems(length: number): Item[] { //гененрируем массив item's, сортируем в случайном порядке, что бы походило на настоящий список
    return [...Array(length)]
      .map((item, index) => {
        item = this.createRandomItem();
        item.name = `item ${index}`;
        return item;
      })
      .sort(() => 0.5 - Math.random())
  }

  private createRandomItem(): Item { //генерируем рандомный item, что бы не создавать списки руками
    const flags = [...this.filters.getFilters()]
      .filter(() => Math.random() >= 0.5);
    return {
      name: '',
      flags
    }
  }

  public getFilterList() {
    return this.filters.getFilters()
  }
}
