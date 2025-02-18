import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesCompComponent } from './guidelines-comp.component';

describe('GuidelinesCompComponent', () => {
  let component: GuidelinesCompComponent;
  let fixture: ComponentFixture<GuidelinesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelinesCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidelinesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
