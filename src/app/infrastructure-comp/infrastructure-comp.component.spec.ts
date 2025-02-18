import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureCompComponent } from './infrastructure-comp.component';

describe('InfrastructureCompComponent', () => {
  let component: InfrastructureCompComponent;
  let fixture: ComponentFixture<InfrastructureCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastructureCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
