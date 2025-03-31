import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Component({
  selector: 'breadcrumb-comp',
  imports: [RouterModule, NgForOf, NgIf],
  templateUrl: './breadcrumb-comp.component.html',
  styleUrl: './breadcrumb-comp.component.css'
})
export class BreadcrumbCompComponent {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private configService: ConfigService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  public labelChecker(label: string): string {
    if (label == 'PLACEHOLDER') {
      return this.configService.config.name;
    }
    return label;
  }
}
