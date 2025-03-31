import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreferencesService } from '../preferences.service';
import { NgIf } from '@angular/common';
import { ConfigService } from '../config.service';

@Component({
  selector: 'header-comp',
  imports: [RouterModule, NgIf],
  templateUrl: './header-comp.component.html',
  styleUrl: './header-comp.component.css'
})
export class HeaderCompComponent {
  constructor(public preferencesService: PreferencesService, public configService: ConfigService) { }
}
