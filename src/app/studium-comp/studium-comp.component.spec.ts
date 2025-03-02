import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiumCompComponent } from './studium-comp.component';

describe('StudiumCompComponent', () => {
  let component: StudiumCompComponent;
  let fixture: ComponentFixture<StudiumCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiumCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiumCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
