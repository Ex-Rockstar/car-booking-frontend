import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  // Resolve logo within admin/assets (placed under features/admin/assets)
  logoUrl: string = new URL('../assets/vcabs-logo.png', import.meta.url).toString();
}
