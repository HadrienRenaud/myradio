import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPodcasts() {
    return this.httpClient.get(environment.apiUrl + '/podcasts');
  }
}
