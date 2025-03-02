import { Component } from '@angular/core';
import { PreferencesService } from '../../preferences.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'initiatives',
  imports: [NgForOf],
  templateUrl: './initiatives.component.html',
  styleUrl: './initiatives.component.css'
})
export class InitiativesComponent {
  constructor(public  preferencesService: PreferencesService) { }
}
