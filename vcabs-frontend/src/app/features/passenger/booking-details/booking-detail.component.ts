import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking | null = null;
  bookingId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('id') || '';
    this.loadBookingDetails();
  }

  private loadBookingDetails(): void {
    this.bookingService.getBookingById(this.bookingId).subscribe((booking: Booking | undefined) => {
      this.booking = booking || null;
    });
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  cancelBooking(): void {
    if (this.booking) {
      this.bookingService.cancelBooking(this.booking.id).subscribe(() => {
        this.loadBookingDetails();
      });
    }
  }
}
