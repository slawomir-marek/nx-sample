import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@nx-sample/catalog/domain';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [ProductSearchComponent],
  exports: [ProductSearchComponent],
})
export class CatalogFeatureSearchModule {}
