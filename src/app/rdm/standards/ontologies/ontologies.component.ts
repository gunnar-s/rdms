import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { PreferencesService } from '../../../preferences.service';

@Component({
  selector: 'ontologies',
  imports: [NgForOf, NgIf],
  templateUrl: './ontologies.component.html',
  styleUrl: './ontologies.component.css'
})
export class OntologiesComponent {
  constructor(public  preferencesService: PreferencesService) { }
}
