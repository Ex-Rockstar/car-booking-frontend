import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
import { BookingDetails, Cab } from '../models/booking.model';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return available cabs', () => {
    const cabs = service.getAvailableCabs();
    expect(cabs.length).toBeGreaterThan(0);
  });

  it('should get a cab by ID', () => {
    const cab = service.getCabById('1');
    expect(cab).toBeTruthy();
    expect(cab?.type).toBe('4-seater');
  });

  it('should calculate price correctly', () => {
    const cab: Cab = service.getAvailableCabs()[0];
    const price = service.calculatePrice(cab, 10, 'single');
    expect(price).toBe(cab.basePrice + 10 * cab.pricePerKm);
  });

  it('should create a booking', (done) => {
    const cab: Cab = service.getAvailableCabs()[0];
    const bookingDetails: BookingDetails = {
  pickupLocation: { address: 'A', city: 'CityA', state: 'StateA', pincode: '111111' },
  dropLocation: { address: 'B', city: 'CityB', state: 'StateB', pincode: '222222' },
  distance: 10,
  estimatedDuration: 20,
  cab: cab, // ✅ no error now
  tripType: 'single',
  bookingType: 'trip',
  totalAmount: service.calculatePrice(cab, 10, 'single'),
  bookingDate: new Date(),
  travelDate: new Date(),
  travelTime: '10:00',
  passengers: 2
};

    

    service.createBooking(bookingDetails).subscribe(booking => {
      expect(booking).toBeTruthy();
      expect(booking.bookingDetails.cab.type).toBe('4-seater');
      done();
    });
  });

  it('should get booking stats', (done) => {
    service.getBookingStats().subscribe(stats => {
      expect(stats.totalBookings).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});
