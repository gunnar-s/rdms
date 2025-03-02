import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdmsCompComponent } from './fdms-comp.component';

describe('FdmsCompComponent', () => {
  let component: FdmsCompComponent;
  let fixture: ComponentFixture<FdmsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FdmsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdmsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
