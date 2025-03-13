import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntologiesComponent } from './ontologies.component';

describe('OntologiesComponent', () => {
  let component: OntologiesComponent;
  let fixture: ComponentFixture<OntologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
