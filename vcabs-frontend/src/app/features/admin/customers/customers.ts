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
    { customerId: 'CUST-3001', customerName: 'Priya Nair', email: 'priya.nair@example.com', password: '••••••••', contactNumber: '+91 98765 43210' },
    { customerId: 'CUST-3002', customerName: 'Arjun Verma', email: 'arjun.verma@example.com', password: '••••••••', contactNumber: '+91 91234 56780' },
    { customerId: 'CUST-3003', customerName: 'Sunita Rao', email: 'sunita.rao@example.com', password: '••••••••', contactNumber: '+91 99887 77665' },
    { customerId: 'CUST-3004', customerName: 'Rakesh Kumar', email: 'rakesh.kumar@example.com', password: '••••••••', contactNumber: '+91 90000 12345' },
    { customerId: 'CUST-3005', customerName: 'Meena Iyer', email: 'meena.iyer@example.com', password: '••••••••', contactNumber: '+91 98765 11122' },
    { customerId: 'CUST-3006', customerName: 'Ajay Singh', email: 'ajay.singh@example.com', password: '••••••••', contactNumber: '+91 91234 22233' },
    { customerId: 'CUST-3007', customerName: 'Kavita Pillai', email: 'kavita.pillai@example.com', password: '••••••••', contactNumber: '+91 99887 33344' },
    { customerId: 'CUST-3008', customerName: 'Rohan Das', email: 'rohan.das@example.com', password: '••••••••', contactNumber: '+91 90000 44455' },
    { customerId: 'CUST-3009', customerName: 'Sonia Kapoor', email: 'sonia.kapoor@example.com', password: '••••••••', contactNumber: '+91 98765 55566' },
    { customerId: 'CUST-3010', customerName: 'Vivek Menon', email: 'vivek.menon@example.com', password: '••••••••', contactNumber: '+91 91234 66677' }
  ];
}



