import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@nx-sample-test/catalog/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CatalogFeatureSearchModule {}
