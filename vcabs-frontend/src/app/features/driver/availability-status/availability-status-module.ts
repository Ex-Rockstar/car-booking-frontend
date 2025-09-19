import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityToggleComponent } from './availability-toggle/availability-toggle';
import { BreakMode } from './break-mode/break-mode';
import { StatusSummary } from './status-summary/status-summary';
import { StatusAlerts } from './status-alerts/status-alerts';

@NgModule({
  
  imports: [CommonModule,
    AvailabilityToggleComponent,
    BreakMode,
    StatusSummary,
    StatusAlerts
  ],
  exports: [
    AvailabilityToggleComponent,
    BreakMode,
    StatusSummary,
    StatusAlerts
  ],
  
})
export class AvailabilityStatusModule {}
