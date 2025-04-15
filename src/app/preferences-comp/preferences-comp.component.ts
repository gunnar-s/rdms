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
  selectedValue: string = '';
  options: string[] = ['Admin', 'Informatik', 'Physik', 'Medizin', 'Geistes- und Sozialwissenschaften'];
  @ViewChild('form', { static: true })
  ngForm!: NgForm;
  
  constructor(public preferencesService: PreferencesService) {
    this.selectedValue = this.options[0];
  }

  ngOnInit() {
    this.ngForm.form.valueChanges.subscribe(x => {
      this.preferencesService.savePreferences();
    })
    this.preferencesService.loggedIn = true;
  }

  onButtonClick(): void {
    switch (this.selectedValue) {
      case "Admin": this.preferencesService.setDefaultAdmin(); break;
      case "Informatik": this.preferencesService.setDefaultInformatikUser(); break;
      case "Physik": this.preferencesService.setDefaultPhysikUser(); break;
      case "Medizin": this.preferencesService.setDefaultMedizinUser(); break;
      case "Geistes- und Sozialwissenschaften": this.preferencesService.setDefaultGeistesSozialUser(); break;
      default: break;
    }
  }
}
