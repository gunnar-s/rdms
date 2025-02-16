import { Component, OnInit } from '@angular/core';
import { Entry, PreferencesService } from '../preferences.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'start-comp',
  imports: [NgForOf, NgIf],
  templateUrl: './start-comp.component.html',
  styleUrl: './start-comp.component.css'
})
export class StartCompComponent {

  constructor(public  preferencesService: PreferencesService) { }

  reposActive(repos: Entry[]) : boolean {
    return repos.filter(repo => repo.active).length > 0
  }
}
