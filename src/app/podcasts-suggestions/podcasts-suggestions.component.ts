import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';

@Component({
  selector: 'app-podcasts-suggestions',
  templateUrl: './podcasts-suggestions.component.html',
  styleUrls: ['./podcasts-suggestions.component.css']
})
export class PodcastsSuggestionsComponent implements OnInit {
  
  podcasts;

  constructor (
    private podcastService: PodcastsService
  ) {
    this.podcastService.getPodcasts().subscribe(data => {
      this.podcasts = data;
      console.log("Receiving podcasts :", this.podcasts);
    });
    
  }
  ngOnInit() {
  }

}
