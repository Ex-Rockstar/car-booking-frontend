import { Component, Input } from '@angular/core';

@Component({
  selector: 'stat-card',
  standalone: true,
  template: `
    <div class="rounded-xl bg-white shadow p-4 text-center flex flex-col items-center gap-2">
      <span class="text-2xl">{{ icon }}</span>
      <span class="font-semibold text-lg">{{ value }}</span>
      <span class="text-sm text-gray-500">{{ label }}</span>
    </div>
  `
})
export class StatCardComponent {
  @Input() icon = '';
  @Input() value: string | number = '';
  @Input() label = '';
}
