import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisitComponent } from './whatisit.component';

describe('WhatisitComponent', () => {
  let component: WhatisitComponent;
  let fixture: ComponentFixture<WhatisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatisitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
