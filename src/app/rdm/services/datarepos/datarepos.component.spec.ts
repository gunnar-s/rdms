import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatareposComponent } from './datarepos.component';

describe('DatareposComponent', () => {
  let component: DatareposComponent;
  let fixture: ComponentFixture<DatareposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatareposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatareposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
