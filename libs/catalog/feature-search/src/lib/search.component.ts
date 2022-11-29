import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@nx-sample-test/catalog/domain';

@Component({
  selector: 'catalog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {}
}
