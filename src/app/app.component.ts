import { Component } from '@angular/core';
import { PodcastsService } from './podcasts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myradio';

  constructor () { }
}
