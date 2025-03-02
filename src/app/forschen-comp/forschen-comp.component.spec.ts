import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForschenCompComponent } from './forschen-comp.component';

describe('ForschenCompComponent', () => {
  let component: ForschenCompComponent;
  let fixture: ComponentFixture<ForschenCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForschenCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForschenCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
