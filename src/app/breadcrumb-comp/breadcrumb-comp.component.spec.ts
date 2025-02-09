import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbCompComponent } from './breadcrumb-comp.component';

describe('BreadcrumbCompComponent', () => {
  let component: BreadcrumbCompComponent;
  let fixture: ComponentFixture<BreadcrumbCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
