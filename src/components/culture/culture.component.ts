
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './culture.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CultureComponent {}
