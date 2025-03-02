import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavCompComponent } from '../nav-comp/nav-comp.component';

@Component({
  selector: 'fdms-comp',
  imports: [RouterOutlet, NavCompComponent],
  templateUrl: './fdms-comp.component.html',
  styleUrl: './fdms-comp.component.css'
})
export class FdmsCompComponent {

}
