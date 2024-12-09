import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquatsComponent } from './squats.component';

describe('SquatsComponent', () => {
  let component: SquatsComponent;
  let fixture: ComponentFixture<SquatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
