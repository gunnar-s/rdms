import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesCompComponent } from './preferences-comp.component';

describe('PreferencesCompComponent', () => {
  let component: PreferencesCompComponent;
  let fixture: ComponentFixture<PreferencesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
