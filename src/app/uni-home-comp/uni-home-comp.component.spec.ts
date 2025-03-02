import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniHomeCompComponent } from './uni-home-comp.component';

describe('UniHomeCompComponent', () => {
  let component: UniHomeCompComponent;
  let fixture: ComponentFixture<UniHomeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniHomeCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniHomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
