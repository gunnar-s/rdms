import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'nav-comp',
  imports: [RouterModule, NgIf],
  templateUrl: './nav-comp.component.html',
  styleUrl: './nav-comp.component.css'
})
export class NavCompComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  isServices(): boolean {
    return this.isRoute("services");
  }
  
  isStandards(): boolean {
    return this.isRoute("standards");
  }

  isRoute(name: string): boolean {
    return this.activatedRoute.children[this.activatedRoute.children.length-1].snapshot.url.join().endsWith(name);
  }
}
