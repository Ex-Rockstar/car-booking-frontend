import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntercityBookingComponent } from './intercity-booking.component';

describe('IntercityBookingComponent', () => {
  let component: IntercityBookingComponent;
  let fixture: ComponentFixture<IntercityBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntercityBookingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IntercityBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the intercity booking component', () => {
    expect(component).toBeTruthy();
  });

  it('should have today\'s date as default travelDate', () => {
    expect(component.travelDate).toBe(new Date().toISOString().split('T')[0]);
  });

  it('should validate form correctly', () => {
    component.pickupLocation.city = '';
    component.dropLocation.city = '';
    component.travelDate = '';
    component.travelTime = '';
    expect(component.isFormValid()).toBeFalse();

    component.pickupLocation.city = 'CityA';
    component.dropLocation.city = 'CityB';
    component.travelDate = component.today;
    component.travelTime = '09:00';
    expect(component.isFormValid()).toBeTrue();
  });
});
