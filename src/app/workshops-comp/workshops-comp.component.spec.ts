import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsCompComponent } from './workshops-comp.component';

describe('WorkshopsCompComponent', () => {
  let component: WorkshopsCompComponent;
  let fixture: ComponentFixture<WorkshopsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
