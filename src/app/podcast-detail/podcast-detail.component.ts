import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.css']
})
export class PodcastDetailComponent implements OnInit {

  podcastId;
  podcast;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) {
    this.route.paramMap.subscribe(params => {
      this.podcastId = params.get('podcastId');
      this.httpClient.get('http://localhost:8000/api/podcasts/' + this.podcastId)
      .subscribe(data => this.podcast = data);
    })
  }

  ngOnInit() {
  }

}
