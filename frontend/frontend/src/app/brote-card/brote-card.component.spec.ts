import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroteCardComponent } from './brote-card.component';

describe('BroteCardComponent', () => {
  let component: BroteCardComponent;
  let fixture: ComponentFixture<BroteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
