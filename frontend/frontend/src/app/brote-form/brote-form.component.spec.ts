import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroteFormComponent } from './brote-form.component';

describe('BroteFormComponent', () => {
  let component: BroteFormComponent;
  let fixture: ComponentFixture<BroteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
