import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceManagementComponent } from './reference-management.component';

describe('ReferenceManagementComponent', () => {
  let component: ReferenceManagementComponent;
  let fixture: ComponentFixture<ReferenceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
