import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesCompComponent } from './policies-comp.component';

describe('PoliciesCompComponent', () => {
  let component: PoliciesCompComponent;
  let fixture: ComponentFixture<PoliciesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
