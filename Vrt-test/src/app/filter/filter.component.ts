import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input('type') filterType: string;
  @Input('method') filterMethod: string;
  constructor() { }

  ngOnInit() {
  }

}
