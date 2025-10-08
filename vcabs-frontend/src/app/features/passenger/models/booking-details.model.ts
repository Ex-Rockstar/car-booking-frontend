export interface LocationDetails {
    address: string;
    city: string;
    state: string;
    pincode: string;
}

export interface BookingDetails {
    id: number;
    customerName: string;
    bookingDate: Date;
    pickupLocation: LocationDetails;
    dropoffLocation: LocationDetails;
    cabType: string;
    price: number;
    estimatedDuration: number; // <-- Add this line
    totalAmount?: number;      // <-- Add if used in your code
    tripType?: 'single' | 'round';
    bookingType?: 'trip' | 'intercity' | 'rental' | 'reserve';
    travelDate?: Date;
    travelTime?: string;
    passengers?: number;
}

export interface Cab {
    id: number;
    type: string;
    capacity: number;
}

export interface BookingStats {
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export class Booking {
   id!: number;
    customerName!: string;
    bookingDate!: Date;
    pickupLocation!: LocationDetails;
    dropoffLocation!: LocationDetails;
    cabType!: string;
    price!: number;
}