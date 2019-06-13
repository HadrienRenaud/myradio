import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { PodcastsSuggestionsComponent } from './podcasts-suggestions/podcasts-suggestions.component';

const routes: Routes = [
  {path: 'podcast/:podcastId', component: PodcastDetailComponent},
  {path: '', component: PodcastsSuggestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
