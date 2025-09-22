import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface StatusLog {
  status: 'Online' | 'Offline' | 'Break';
  timestamp: Date;
  note?: string;
  reason?: string;
}

@Component({
  selector: 'app-status-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './status-summary.html',
  styleUrls: ['./status-summary.css']
})
export class StatusSummaryComponent {
  @Input() currentStatus: 'Online' | 'Offline' | 'Break' = 'Offline';
  @Input() currentTimestamp: Date = new Date();
  @Input() statusLogs: StatusLog[] = [];

  note: string = '';
  reason: string = '';

  addLog(status: 'Online' | 'Offline' | 'Break', note?: string, reason?: string) {
    this.statusLogs.unshift({
      status,
      timestamp: new Date(),
      note,
      reason
    });
    this.currentStatus = status;
    this.currentTimestamp = new Date();
  }
}
