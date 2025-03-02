import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiumHomeCompComponent } from './studium-home-comp.component';

describe('StudiumHomeCompComponent', () => {
  let component: StudiumHomeCompComponent;
  let fixture: ComponentFixture<StudiumHomeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiumHomeCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiumHomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
