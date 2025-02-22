import { Component, OnInit, ViewChild } from '@angular/core';
import { Entry, PreferencesService } from '../preferences.service';
import { NgForOf, NgIf, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'preferences-comp',
  imports: [NgForOf, FormsModule, CommonModule],
  templateUrl: './preferences-comp.component.html',
  styleUrl: './preferences-comp.component.css'
})
export class PreferencesCompComponent implements OnInit {
  @ViewChild('form', { static: true })
  ngForm!: NgForm;
  
  constructor(public preferencesService: PreferencesService) { }

  ngOnInit() {
    this.ngForm.form.valueChanges.subscribe(x => {
      this.preferencesService.savePreferences();
    })
    this.preferencesService.loggedIn = true;
  }
}
