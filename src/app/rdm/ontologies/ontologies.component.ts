import { Component } from '@angular/core';
import { PreferencesService } from '../../preferences.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ontologies',
  imports: [NgForOf],
  templateUrl: './ontologies.component.html',
  styleUrl: './ontologies.component.css'
})
export class OntologiesComponent {
  constructor(public  preferencesService: PreferencesService) { }
}
