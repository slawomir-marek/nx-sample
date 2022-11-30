import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CatalogService, ProductDto, ProductWithAlias, ProductWithOpaque } from 'libs/catalog/domain/src';
import { Observable } from 'rxjs';

@Component({
    selector: 'catalog-product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ProductSearchComponent implements OnInit {

    items$: Observable<ProductDto[]> | undefined;
    itemsWithAlias$: Observable<ProductWithAlias[]> | undefined;
    itemsWithOpaque$: Observable<ProductWithOpaque[]> | undefined;

    constructor(private service: CatalogService) {
    }

    ngOnInit(): void {
      this.items$ = this.service.getAll();
      this.itemsWithAlias$ = this.service.getAllWithAlias();
      this.itemsWithOpaque$ = this.service.getAllWithOpaque();
    }
  }
