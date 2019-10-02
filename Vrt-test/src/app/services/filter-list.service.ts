import { Injectable } from '@angular/core';

const filterNameList = ['flower', 'heart', 'sun', 'flash'];

@Injectable({
  providedIn: 'root'
})
export class FilterListService {
  constructor() { }
  getFilters(): string[] {
    return filterNameList;
  }

}
