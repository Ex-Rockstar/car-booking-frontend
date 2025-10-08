import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RentalBookingComponent } from './rental-booking.component';

describe('RentalBookingComponent', () => {
  let component: RentalBookingComponent;
  let fixture: ComponentFixture<RentalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalBookingComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have today as the minimum date', () => {
    const today = new Date().toISOString().split('T')[0];
    expect(component.today).toBe(today);
  });

  it('should validate form correctly', () => {
    component.pickupLocation = { address: 'A', city: 'City', state: '', pincode: '123' };
    component.startDate = component.today;
    component.startTime = '09:00';
    expect(component.isFormValid()).toBeTrue();
  });
});
