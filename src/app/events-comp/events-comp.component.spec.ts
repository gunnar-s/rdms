import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCompComponent } from './events-comp.component';

describe('EventsCompComponent', () => {
  let component: EventsCompComponent;
  let fixture: ComponentFixture<EventsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
