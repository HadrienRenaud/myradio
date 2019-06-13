import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsSuggestionsComponent } from './podcasts-suggestions.component';

describe('PodcastsSuggestionsComponent', () => {
  let component: PodcastsSuggestionsComponent;
  let fixture: ComponentFixture<PodcastsSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastsSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
