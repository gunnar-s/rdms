import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { PreferencesService } from '../../../preferences.service';

@Component({
  selector: 'metadatastandards',
  imports: [NgForOf],
  templateUrl: './metadatastandards.component.html',
  styleUrl: './metadatastandards.component.css'
})
export class MetadatastandardsComponent {
  constructor(public  preferencesService: PreferencesService) { }
}
