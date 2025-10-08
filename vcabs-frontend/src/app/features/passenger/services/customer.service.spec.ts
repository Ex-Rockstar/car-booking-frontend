import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import { Customer } from '../models/booking.model';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the current customer', () => {
    const customer: Customer = service.getCurrentCustomer();
    expect(customer).toBeTruthy();
    expect(customer.name).toBe('John Doe');
  });

  it('should update customer preferences', () => {
    service.updateCustomerPreferences({ preferredCabType: '6-seater' });
    const customer = service.getCurrentCustomer();
    expect(customer.preferences.preferredCabType).toBe('6-seater');
  });

  it('should update customer stats', () => {
    service.updateCustomerStats(5, 1500);
    const customer = service.getCurrentCustomer();
    expect(customer.totalBookings).toBe(5);
    expect(customer.totalSpent).toBe(1500);
  });
});
