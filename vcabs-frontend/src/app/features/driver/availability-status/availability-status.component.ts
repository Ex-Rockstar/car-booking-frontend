import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../../core/services/driver';

@Component({
  selector: 'app-availability-status',
  templateUrl: './availability-status.component.html',
  styleUrls: ['./availability-status.component.css']
})
export class AvailabilityStatusComponent implements OnInit {
  isAvailable: boolean = false;
  workingHours: number = 0;
  currentLocation: string = '';
  preferredArea: string = '';

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.loadAvailabilityStatus();
  }

  private loadAvailabilityStatus(): void {
    this.driverService.getAvailabilityStatus().subscribe(
      status => {
        this.isAvailable = status.isAvailable;
        this.workingHours = status.workingHours;
        this.currentLocation = status.currentLocation;
        this.preferredArea = status.preferredArea;
      }
    );
  }

  toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
    this.driverService.updateAvailability(this.isAvailable).subscribe();
  }

  updatePreferredArea(area: string): void {
    this.preferredArea = area;
    this.driverService.updatePreferredArea(area).subscribe();
  }

  updateWorkingHours(hours: number): void {
    this.workingHours = hours;
    this.driverService.updateWorkingHours(hours).subscribe();
  }
}