import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CustomerRow {
  customerId: string;
  customerName: string;
  email: string;
  password: string;
  contactNumber: string;
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers {
  customers: CustomerRow[] = [
    {
      customerId: 'CUST-3001',
      customerName: 'Priya Nair',
      email: 'priya.nair@example.com',
      password: '••••••••',
      contactNumber: '+91 98765 43210'
    },
    {
      customerId: 'CUST-3002',
      customerName: 'Arjun Verma',
      email: 'arjun.verma@example.com',
      password: '••••••••',
      contactNumber: '+91 91234 56780'
    }
  ];
}


