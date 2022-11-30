import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { CatalogDomainModule } from '@nx-sample/catalog/domain';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class CatalogFeatureSearchModule {}
