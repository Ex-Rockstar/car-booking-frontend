import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReserveBookingComponent } from './reserve-booking.component';

describe('ReserveBookingComponent', () => {
  let component: ReserveBookingComponent;
  let fixture: ComponentFixture<ReserveBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveBookingComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tomorrow as the minimum date', () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    expect(component.tomorrow).toBe(today.toISOString().split('T')[0]);
  });

  it('should validate form correctly', () => {
    component.pickupLocation = { address: 'A', city: 'City', state: '', pincode: '123' };
    component.dropLocation = { address: 'B', city: 'City', state: '', pincode: '456' };
    component.travelDate = component.tomorrow;
    component.travelTime = '09:00';
    expect(component.isFormValid()).toBeTrue();
  });
});
