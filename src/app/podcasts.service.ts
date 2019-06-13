import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPodcasts() {
    return this.httpClient.get('http://localhost:8000/api/podcasts');
  }
}
