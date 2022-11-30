import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CatalogFeatureSearchModule } from '@nx-sample/catalog/feature-search';
import { CatalogFeatureManageModule } from '@nx-sample/catalog/feature-manage';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

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
