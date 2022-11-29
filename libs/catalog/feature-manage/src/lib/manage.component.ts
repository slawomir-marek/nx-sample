import { Component, OnInit } from '@angular/core';
import { ManageFacade } from '@nx-sample-test/catalog/domain';

@Component({
  selector: 'catalog-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(private manageFacade: ManageFacade) {}

  ngOnInit() {}
}
