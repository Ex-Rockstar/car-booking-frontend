import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookingService } from '../../../core/services/booking';
import { WebsocketService } from '../../../core/services/websocket';
import { Ride } from '../../../core/models/ride.model';

@Component({
  selector: 'app-ride-requests',
  templateUrl: './ride-requests.component.html',
  styleUrls: ['./ride-requests.component.css']
})
export class RideRequestsComponent implements OnInit, OnDestroy {
  rideRequests: Ride[] = [];
  private wsSubscription: Subscription;

  constructor(
    private bookingService: BookingService,
    private websocketService: WebsocketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPendingRequests();
    this.subscribeToNewRequests();
  }

  ngOnDestroy(): void {
    if (this.wsSubscription) {
      this.wsSubscription.unsubscribe();
    }
  }

  private loadPendingRequests(): void {
    this.bookingService.getPendingRideRequests().subscribe(
      requests => this.rideRequests = requests
    );
  }

  private subscribeToNewRequests(): void {
    this.wsSubscription = this.websocketService
      .subscribeToRideRequests()
      .subscribe(
        newRequest => {
          this.rideRequests = [newRequest, ...this.rideRequests];
        }
      );
  }

  acceptRide(rideId: string): void {
    this.bookingService.acceptRideRequest(rideId).subscribe(
      () => {
        this.rideRequests = this.rideRequests.filter(ride => ride.id !== rideId);
        this.router.navigate(['/driver/ride-tracking', rideId]);
      }
    );
  }

  declineRide(rideId: string): void {
    this.bookingService.declineRideRequest(rideId).subscribe(
      () => {
        this.rideRequests = this.rideRequests.filter(ride => ride.id !== rideId);
      }
    );
  }
}