import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodereposComponent } from './coderepos.component';

describe('CodereposComponent', () => {
  let component: CodereposComponent;
  let fixture: ComponentFixture<CodereposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodereposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodereposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
