import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCompComponent } from './start-comp.component';

describe('StartCompComponent', () => {
  let component: StartCompComponent;
  let fixture: ComponentFixture<StartCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
