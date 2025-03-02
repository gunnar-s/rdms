import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniCompComponent } from './uni-comp.component';

describe('UniCompComponent', () => {
  let component: UniCompComponent;
  let fixture: ComponentFixture<UniCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
