import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripBookingComponent } from './trip-booking.component';
import { BookingService } from '../../../services/booking.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Cab } from '../../../models/booking.model';

describe('TripBookingComponent', () => {
  let component: TripBookingComponent;
  let fixture: ComponentFixture<TripBookingComponent>;
  let bookingServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    bookingServiceMock = {
      getAvailableCabs: jest.fn().mockReturnValue([
        { id: '1', type: '4-seater', name: 'Economy Sedan', basePrice: 50, pricePerKm: 12, image: '', features: ['AC'] },
        { id: '2', type: '6-seater', name: 'Luxury Van', basePrice: 80, pricePerKm: 15, image: '', features: ['AC', 'WiFi'] }
      ]),
      calculatePrice: jest.fn().mockReturnValue(200),
      createBooking: jest.fn().mockReturnValue(of({ id: 'BK001' }))
    };

    routerMock = { navigate: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [TripBookingComponent],
      providers: [
        { provide: BookingService, useValue: bookingServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load available cabs on init', () => {
    expect(component.availableCabs.length).toBeGreaterThan(0);
  });

  it('should validate form correctly', () => {
    component.pickupLocation = { address: 'Test', city: 'City', state: 'State', pincode: '12345' };
    component.dropLocation = { address: 'Test', city: 'City', state: 'State', pincode: '12345' };
    component.travelDate = '2025-10-10';
    component.travelTime = '09:00';
    expect(component.isFormValid()).toBe(true);
  });

  it('should navigate after booking', () => {
    component.selectedCab = component.availableCabs[0];
    component.pickupLocation = { address: 'Test', city: 'City', state: 'State', pincode: '12345' };
    component.dropLocation = { address: 'Test', city: 'City', state: 'State', pincode: '12345' };
    component.travelDate = '2025-10-10';
    component.travelTime = '09:00';
    component.confirmBooking();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/booking-details', 'BK001']);
  });
});
