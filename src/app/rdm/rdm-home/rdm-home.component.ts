import { NgComponentOutlet, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Entry, PreferencesService } from '../../preferences.service';
import { NewsCompComponent } from '../news-comp/news-comp.component';
import { EventsCompComponent } from '../events-comp/events-comp.component';
import { WelcomeCompComponent } from '../welcome-comp/welcome-comp.component';

@Component({
  selector: 'rdm-home',
  imports: [NgForOf, NgIf, NgComponentOutlet, WelcomeCompComponent, NewsCompComponent, EventsCompComponent],
  templateUrl: './rdm-home.component.html',
  styleUrl: './rdm-home.component.css'
})
export class RdmHomeComponent {
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
