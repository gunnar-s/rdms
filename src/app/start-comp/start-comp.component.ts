import { Component } from '@angular/core';
import { Entry, PreferencesService } from '../preferences.service';
import { NgForOf, NgIf, NgComponentOutlet } from '@angular/common';
import { WelcomeCompComponent } from '../welcome-comp/welcome-comp.component';
import { NewsCompComponent } from '../news-comp/news-comp.component';
import { EventsCompComponent } from '../events-comp/events-comp.component';

@Component({
  selector: 'start-comp',
  imports: [NgForOf, NgIf, NgComponentOutlet, WelcomeCompComponent, NewsCompComponent, EventsCompComponent],
  templateUrl: './start-comp.component.html',
  styleUrl: './start-comp.component.css'
})
export class StartCompComponent {

  constructor(public  preferencesService: PreferencesService) { }

  reposActive(repos: Entry[]) : boolean {
    return repos.filter(repo => repo.active).length > 0
  }

  getComponent(name: string) {
    if (name == "welcome") {
      return WelcomeCompComponent;
    } else if (name == "news") {
      return NewsCompComponent;
    } else if (name == "events") {
      return EventsCompComponent
    }
    return null;
  }
}
