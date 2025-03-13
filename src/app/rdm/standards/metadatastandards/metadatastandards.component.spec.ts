import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadatastandardsComponent } from './metadatastandards.component';

describe('MetadatastandardsComponent', () => {
  let component: MetadatastandardsComponent;
  let fixture: ComponentFixture<MetadatastandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetadatastandardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetadatastandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
