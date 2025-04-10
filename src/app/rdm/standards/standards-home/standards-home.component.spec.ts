import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsHomeComponent } from './standards-home.component';

describe('StandardsHomeComponent', () => {
  let component: StandardsHomeComponent;
  let fixture: ComponentFixture<StandardsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
