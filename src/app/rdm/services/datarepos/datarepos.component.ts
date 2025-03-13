import { Component } from '@angular/core';
import { PreferencesService } from '../../../preferences.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'datarepos',
  imports: [NgForOf],
  templateUrl: './datarepos.component.html',
  styleUrl: './datarepos.component.css'
})
export class DatareposComponent {
  constructor(public preferencesService: PreferencesService) {}
}
