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
    {
      customerId: 'CUST-2001',
      customerName: 'Sanjay Mehta',
      driverId: 'DRV-321',
      pickupLocation: 'Sector 18, Noida',
      dropLocation: 'Connaught Place, Delhi',
      amount: 600
    }
  ];
}


