import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavCompComponent } from '../nav-comp/nav-comp.component';

@Component({
  selector: 'rdm-comp',
    imports: [RouterOutlet, NavCompComponent],
  templateUrl: './rdm-comp.component.html',
  styleUrl: './rdm-comp.component.css'
})
export class RdmCompComponent {

}
