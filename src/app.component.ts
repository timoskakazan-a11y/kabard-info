import { ChangeDetectionStrategy, Component, signal, OnInit, effect, viewChild, ElementRef, Renderer2, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {
  isLoading = signal(true);
  private router = inject(Router);
  private renderer = inject(Renderer2);

  outlet = viewChild.required(RouterOutlet, { read: ElementRef });

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const el = this.outlet().nativeElement;
        if(el.children.length > 0) {
          const componentHost = el.children[0];
          this.renderer.removeClass(componentHost, 'route-fade-enter-active');
          this.renderer.addClass(componentHost, 'route-fade-enter');
          setTimeout(() => {
             this.renderer.addClass(componentHost, 'route-fade-enter-active');
          }, 10);
        }
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2500);
  }
}
