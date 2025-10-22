import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-language',
  standalone: true,
  templateUrl: './language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent {}
