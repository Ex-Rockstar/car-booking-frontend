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
    {
      customerId: 'CUST-1001',
      customerName: 'Rahul Sharma',
      driverId: 'DRV-210',
      pickupLocation: 'MG Road, Bengaluru',
      dropLocation: 'Electronic City, Bengaluru',
      amount: 550
    },
    {
      customerId: 'CUST-1002',
      customerName: 'Anita Desai',
      driverId: 'DRV-115',
      pickupLocation: 'Andheri East, Mumbai',
      dropLocation: 'BKC, Mumbai',
      amount: 420
    }
  ];
}


