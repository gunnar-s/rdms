import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdmCompComponent } from './rdm-comp.component';

describe('RdmCompComponent', () => {
  let component: RdmCompComponent;
  let fixture: ComponentFixture<RdmCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdmCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdmCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
