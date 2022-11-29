import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CatalogFeatureSearchModule } from '@nx-sample-test/catalog/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { CatalogFeatureManageModule } from '@nx-sample-test/catalog/feature-manage';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CatalogFeatureSearchModule,
    HttpClientModule,
    CatalogFeatureManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
