import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CompletedRideRow {
  customerId: string;
  customerName: string;
  driverId: string;
  pickupLocation: string;
  dropLocation: string;
  amount: number;
}

@Component({
  selector: 'app-completed-rides',
  standalone: true,
  imports: [CommonModule, NgFor, CurrencyPipe, RouterLink],
  templateUrl: './completed-rides.html',
  styleUrl: './completed-rides.css'
})
export class CompletedRides {
  rides: CompletedRideRow[] = [
    { customerId: 'CUST-2001', customerName: 'Sanjay Mehta', driverId: 'DRV-321', pickupLocation: 'Sector 18, Noida', dropLocation: 'Connaught Place, Delhi', amount: 600 },
    { customerId: 'CUST-2002', customerName: 'Ritu Kapoor', driverId: 'DRV-222', pickupLocation: 'Baner, Pune', dropLocation: 'Hinjewadi, Pune', amount: 350 },
    { customerId: 'CUST-2003', customerName: 'Amit Sinha', driverId: 'DRV-145', pickupLocation: 'Anna Nagar, Chennai', dropLocation: 'T Nagar, Chennai', amount: 280 },
    { customerId: 'CUST-2004', customerName: 'Manoj Pillai', driverId: 'DRV-223', pickupLocation: 'Powai, Mumbai', dropLocation: 'Colaba, Mumbai', amount: 800 },
    { customerId: 'CUST-2005', customerName: 'Shalini Das', driverId: 'DRV-224', pickupLocation: 'Kukatpally, Hyderabad', dropLocation: 'Madhapur, Hyderabad', amount: 270 },
    { customerId: 'CUST-2006', customerName: 'Vikas Yadav', driverId: 'DRV-225', pickupLocation: 'Indiranagar, Bengaluru', dropLocation: 'Koramangala, Bengaluru', amount: 390 },
    { customerId: 'CUST-2007', customerName: 'Sneha Reddy', driverId: 'DRV-226', pickupLocation: 'Gariahat, Kolkata', dropLocation: 'Dumdum, Kolkata', amount: 340 },
    { customerId: 'CUST-2008', customerName: 'Ravi Kumar', driverId: 'DRV-227', pickupLocation: 'DLF Phase 1, Gurgaon', dropLocation: 'Sohna Road, Gurgaon', amount: 420 },
    { customerId: 'CUST-2009', customerName: 'Asha Singh', driverId: 'DRV-228', pickupLocation: 'Ameerpet, Hyderabad', dropLocation: 'Begumpet, Hyderabad', amount: 310 },
    { customerId: 'CUST-2010', customerName: 'Deepak Joshi', driverId: 'DRV-229', pickupLocation: 'BTM Layout, Bengaluru', dropLocation: 'HSR Layout, Bengaluru', amount: 360 }
  ];
}


