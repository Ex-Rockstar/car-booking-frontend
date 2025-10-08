// Define the Cab interface here or import from a different file if needed
export interface Cab {
  id: string;
  model: string;
  licensePlate: string;
  driverName: string;
  // Add other properties as needed
}

export interface BookingDetails {
  pickupLocation: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  dropoffLocation: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  distance: number;
  estimatedDuration: number;
  cab: Cab;
  tripType: 'single' | 'round';
  bookingType: 'trip' | 'intercity' | 'rental' | 'reserve';
  totalAmount: number;
  bookingDate: Date;
  travelDate: Date;
  travelTime: string;
  passengers: number;
}