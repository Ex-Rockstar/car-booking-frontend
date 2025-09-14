import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOversightComponent } from './trip-oversight.component';

describe('TripOversightComponent', () => {
  let component: TripOversightComponent;
  let fixture: ComponentFixture<TripOversightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripOversightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripOversightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
