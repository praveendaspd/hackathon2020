import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressorListComponent } from './components/progressor-list/progressor-list.component';
import {BannerDetailsComponent} from './components/banner-details/banner-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressorListComponent,
    BannerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
