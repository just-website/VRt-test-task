import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterItemService {

  constructor() { }

  public getFilteredData(data, method) {
    return data.filter( element => {
      if (element.flags.length) {
        return element.flags.includes(method);
      } else return true
    });
  }

  public getFiltedText(data, value) {
    return data.filter(element => element.name.includes(value));
  }
}


