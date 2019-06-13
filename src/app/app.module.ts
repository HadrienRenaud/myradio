import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastsSuggestionsComponent } from './podcasts-suggestions/podcasts-suggestions.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastsSuggestionsComponent,
    PodcastDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
