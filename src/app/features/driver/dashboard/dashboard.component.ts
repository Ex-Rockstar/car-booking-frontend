import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../core/services/driver';
import { BookingService } from '../../../core/services/booking';
import { Ride } from '../../../core/models/ride.model';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todaysEarnings: number = 0;
  totalRides: number = 0;
  activeRide: Ride | null = null;
  recentRides: Ride[] = [];
  isOnline: boolean = false;

  constructor(
    private driverService: DriverService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.checkActiveRide();
  }

  private loadDashboardData(): void {
    this.driverService.getTodayStats().subscribe(
      stats => {
        this.todaysEarnings = stats.earnings;
        this.totalRides = stats.totalRides;
        this.recentRides = stats.recentRides;
      }
    );
  }

  private checkActiveRide(): void {
    this.bookingService.getActiveRide().subscribe(
      ride => this.activeRide = ride
    );
  }

  toggleAvailability(): void {
    this.isOnline = !this.isOnline;
    this.driverService.updateAvailability(this.isOnline).subscribe();
  }
}