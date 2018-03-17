import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { HackerNewsService } from './hacker-news.service';
import { DataTablesModule } from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective
  ],
  imports: [
   CommonModule,
    BrowserModule,
    HttpModule, 
    HttpClientModule,
    DataTablesModule

  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }