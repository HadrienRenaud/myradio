import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastsSuggestionsComponent } from './podcasts-suggestions/podcasts-suggestions.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyNavBarComponent } from './my-nav-bar/my-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PodcastsSuggestionsComponent,
    PodcastDetailComponent,
    WelcomeComponent,
    MyNavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
