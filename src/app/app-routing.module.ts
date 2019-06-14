import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'podcast/:podcastId', component: PodcastDetailComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
