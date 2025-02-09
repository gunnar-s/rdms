import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { BreadcrumbCompComponent } from './breadcrumb-comp/breadcrumb-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCompComponent, BreadcrumbCompComponent, NavCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rdms';
}
