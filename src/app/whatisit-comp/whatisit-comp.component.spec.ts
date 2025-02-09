import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisitCompComponent } from './whatisit-comp.component';

describe('WhatisitCompComponent', () => {
  let component: WhatisitCompComponent;
  let fixture: ComponentFixture<WhatisitCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatisitCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatisitCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
