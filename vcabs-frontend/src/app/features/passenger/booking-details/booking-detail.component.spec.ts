import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingDetailsComponent } from './booking-detail.component';
import { BookingService } from '../../services/booking.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models/booking.model';

describe('BookingDetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;
  let bookingServiceMock: any;
  let routerMock: any;
  let routeMock: any;

  beforeEach(async () => {
    bookingServiceMock = {
      getBookingById: jest.fn().mockReturnValue(of({
        id: 'BK001',
        customerId: 'customer-1',
        bookingDetails: {
          pickupLocation: { address: '123 Main Street', city: 'Mumbai', state: 'Maharashtra', pincode: '400001' },
          dropLocation: { address: '456 Business District', city: 'Mumbai', state: 'Maharashtra', pincode: '400002' },
          distance: 15,
          estimatedDuration: 45,
          cab: { id: '1', type: '4-seater', name: 'Economy Sedan', basePrice: 50, pricePerKm: 12, image: '', features: ['AC'] },
          tripType: 'single',
          bookingType: 'trip',
          totalAmount: 230,
          bookingDate: new Date(),
          travelDate: new Date(),
          travelTime: '09:00',
          passengers: 2
        },
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date(),
        paymentStatus: 'paid'
      }))
    };

    routerMock = { navigate: jest.fn() };
    routeMock = { snapshot: { paramMap: { get: () => 'BK001' } } };

    await TestBed.configureTestingModule({
      imports: [BookingDetailsComponent],
      providers: [
        { provide: BookingService, useValue: bookingServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load booking details', () => {
    expect(component.booking).toBeTruthy();
    expect(component.booking?.id).toBe('BK001');
  });

  it('should navigate to dashboard', () => {
    component.goToDashboard();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
