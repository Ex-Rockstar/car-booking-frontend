import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvailabilityToggleComponent } from '../availability-status/availability-toggle/availability-toggle';
import { BreakModeComponent } from '../availability-status/break-mode/break-mode';
import { StatusSummaryComponent } from '../availability-status/status-summary/status-summary';
import { StatCardComponent } from '../availability-status/stat-component/stat-component';

export interface StatusLog {
  status: 'Online' | 'Offline' | 'Break';
  timestamp: Date;
  note?: string;
  reason?: string;
}
interface RideRequest {
  id: string;
  passengerName: string;
  pickupLocation: string;
  dropLocation: string;
  fare: number;
  distance: number;
  requestedAt: Date;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AvailabilityToggleComponent,
    BreakModeComponent,
    StatusSummaryComponent,
    StatCardComponent
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard{
  @ViewChild(StatusSummaryComponent) statusLogger!: StatusSummaryComponent;

  driverName = 'Ramesh Kumar';
  driverId = 'DRV123823';

  isOnline = true;
  isOnBreak = false;
  breakReason = '';

  currentStatus: 'Online' | 'Offline' | 'Break' = 'Online';
  currentTimestamp: Date = new Date();
  statusLogs: StatusLog[] = [
    { status: 'Online', timestamp: new Date(Date.now() - 8300000) }
  ];

  stats = {
    today: {
      rides: 4,
      earnings: 760,
      rating: 4.95,
      time: '3.2'
    }
  };

  earnings = {
    today: 760,
    week: 3520,
    month: 14670
  };

  recentFeedback = [
    { rider: 'Amrita Singh', rating: 5, comment: 'Excellent trip!', date: new Date(Date.now() - 1200000) },
    { rider: 'Jayant R', rating: 5, comment: 'Quick and safe!', date: new Date(Date.now() - 5500000) },
    { rider: 'Varsha B', rating: 4, comment: 'Polite driver', date: new Date(Date.now() - 87000000) },
  ];

  notifications = [
    { message: 'System maintenance at 2am tonight.' }
  ];
  incomingRideRequest: RideRequest | null = null;

simulateIncomingRequest() {
  // Simulate a ride request arriving after 5 seconds
  setTimeout(() => {
    this.incomingRideRequest = {
      id: 'REQ123',
      passengerName: 'Rajesh Kumar',
      pickupLocation: 'MG Road',
      dropLocation: 'Airport',
      fare: 350,
      distance: 12,
      requestedAt: new Date()
    };
  }, 5000);
}
acceptRequest() {
  console.log('Accepted:', this.incomingRideRequest);
  this.changeStatus('Online', `Accepted ride from ${this.incomingRideRequest!.passengerName}`);
  this.incomingRideRequest = null;
}


rejectRequest() {
  if (this.incomingRideRequest) {
    console.log('Rejected:', this.incomingRideRequest);
    this.incomingRideRequest = null;
  }
}


  changeStatus(newStatus: 'Online' | 'Offline' | 'Break', note?: string, reason?: string) {
    this.currentStatus = newStatus;
    this.currentTimestamp = new Date();
    this.isOnline = newStatus === 'Online';
    this.isOnBreak = newStatus === 'Break';
    this.breakReason = reason || '';
    this.statusLogs.unshift({
      status: newStatus,
      timestamp: this.currentTimestamp,
      note,
      reason
    });
    if (this.statusLogs.length > 50) this.statusLogs.pop();
    if (this.statusLogger) {
      this.statusLogger.addNewLog({
        status: newStatus, timestamp: this.currentTimestamp, note, reason
      });
    }
  }

  onAvailabilityChange(isOnline: boolean) {
    this.changeStatus(isOnline ? 'Online' : 'Offline');
  }

  onBreakModeChange(event: { isOnBreak: boolean, breakReason: string }) {
    this.changeStatus(event.isOnBreak ? 'Break' : 'Online', event.isOnBreak ? 'Started break' : 'Ended break', event.breakReason);
  }
}
