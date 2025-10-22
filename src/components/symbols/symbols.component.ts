
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-symbols',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './symbols.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SymbolsComponent {}
