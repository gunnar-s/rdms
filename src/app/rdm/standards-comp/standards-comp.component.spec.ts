import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsCompComponent } from './standards-comp.component';

describe('StandardsCompComponent', () => {
  let component: StandardsCompComponent;
  let fixture: ComponentFixture<StandardsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
