import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForschenHomeCompComponent } from './forschen-home-comp.component';

describe('ForschenHomeCompComponent', () => {
  let component: ForschenHomeCompComponent;
  let fixture: ComponentFixture<ForschenHomeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForschenHomeCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForschenHomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
