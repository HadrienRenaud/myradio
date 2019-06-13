import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.css']
})
export class PodcastDetailComponent implements OnInit {

  podcast = {
    title: "This is a podcast.",
    author: "Me",
    src: "https://sipios.com/team"
  };

  constructor() { }

  ngOnInit() {
  }

}
