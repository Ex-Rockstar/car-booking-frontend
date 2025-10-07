import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';

interface ActiveRideRow {
  customerId: string;
  customerName: string;
  driverId: string;
  pickupLocation: string;
  dropLocation: string;
  amount: number;
}

@Component({
  selector: 'app-active-rides',
  standalone: true,
  imports: [CommonModule, NgFor, CurrencyPipe],
  templateUrl: './active-rides.html',
  styleUrl: './active-rides.css'
})
export class ActiveRides {
  rides: ActiveRideRow[] = [
    { customerId: 'CUST-1001', customerName: 'Rahul Sharma', driverId: 'DRV-210', pickupLocation: 'MG Road, Bengaluru', dropLocation: 'Electronic City, Bengaluru', amount: 550 },
    { customerId: 'CUST-1002', customerName: 'Anita Desai', driverId: 'DRV-115', pickupLocation: 'Andheri East, Mumbai', dropLocation: 'BKC, Mumbai', amount: 420 },
    { customerId: 'CUST-1003', customerName: 'Vikram Singh', driverId: 'DRV-312', pickupLocation: 'Salt Lake, Kolkata', dropLocation: 'Howrah, Kolkata', amount: 390 },
    { customerId: 'CUST-1004', customerName: 'Meera Joshi', driverId: 'DRV-198', pickupLocation: 'Gachibowli, Hyderabad', dropLocation: 'Hitech City, Hyderabad', amount: 250 },
    { customerId: 'CUST-1005', customerName: 'Suresh Patil', driverId: 'DRV-201', pickupLocation: 'Vashi, Navi Mumbai', dropLocation: 'Thane, Mumbai', amount: 700 },
    { customerId: 'CUST-1006', customerName: 'Neha Gupta', driverId: 'DRV-202', pickupLocation: 'Kothrud, Pune', dropLocation: 'Shivaji Nagar, Pune', amount: 320 },
    { customerId: 'CUST-1007', customerName: 'Aman Jain', driverId: 'DRV-203', pickupLocation: 'Banjara Hills, Hyderabad', dropLocation: 'Secunderabad, Hyderabad', amount: 480 },
    { customerId: 'CUST-1008', customerName: 'Divya Menon', driverId: 'DRV-204', pickupLocation: 'Alwarpet, Chennai', dropLocation: 'Velachery, Chennai', amount: 410 },
    { customerId: 'CUST-1009', customerName: 'Rohit Shetty', driverId: 'DRV-205', pickupLocation: 'Jayanagar, Bengaluru', dropLocation: 'Whitefield, Bengaluru', amount: 600 },
    { customerId: 'CUST-1010', customerName: 'Kiran Rao', driverId: 'DRV-206', pickupLocation: 'DLF Phase 3, Gurgaon', dropLocation: 'Cyber City, Gurgaon', amount: 350 }
  ];
}


