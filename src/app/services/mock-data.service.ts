import { Injectable } from '@angular/core';
import { FilterListService } from './filter-list.service';

interface LisItem {
  name: string;
  flags: string[];
}

interface StoreItem {
  name: string,
  initialData: LisItem[],
  filterData: LisItem[] | []
}

interface Store {
  item: StoreItem
}

@Injectable({
  providedIn: 'root'
})

export class MockDataService {
  public store = {};
  constructor(
    private filters: FilterListService
  ) { }

  public getStoreItems(name: string, length?: number): LisItem[] {

    if (!this.store[name]) {
      const listItem = this.createListItem(length);
      this.store[name] = {
        name,
        initialData: listItem,
        filterData: listItem
      }
    }
    return this.store[name].initialData;
  }

  private createListItem(length: number): LisItem[] {
    return [...Array(length)] //гененрируем массив item's, сортируем в случайном порядке, что бы походило на настоящий список
      .map((item, index) => {
        item = this.createRandomItem();
        item.name = `item ${index}`;
        return item;
      })
      .sort(() => 0.5 - Math.random());
  }

  private createRandomItem(): LisItem { //генерируем рандомный item, что бы не создавать списки руками
    const flags = [...this.filters.getFilters()]
      .filter(() => Math.random() >= 0.5);
    return {
      name: '',
      flags
    }
  }

  public getFilterList() {
    return this.filters.getFilters();
  }

  // public getStoreItem(name: string): StoreItem {
  //   return this.store[name].initialData;
  // }

  public setStoreItem(name, data): void {
    this.store[name].filterData = data;
    return this.store[name].filterData;
  }
}
