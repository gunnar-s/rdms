import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdmHomeComponent } from './rdm-home.component';

describe('RdmHomeComponent', () => {
  let component: RdmHomeComponent;
  let fixture: ComponentFixture<RdmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdmHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
