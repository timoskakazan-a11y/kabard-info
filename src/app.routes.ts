
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { CultureComponent } from './components/culture/culture.component';
import { LanguageComponent } from './components/language/language.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'Главная | Эхо Черкесии' },
  { path: 'symbols', component: SymbolsComponent, title: 'Символы | Эхо Черкесии' },
  { path: 'culture', component: CultureComponent, title: 'Культура | Эхо Черкесии' },
  { path: 'language', component: LanguageComponent, title: 'Язык | Эхо Черкесии' },
  { path: 'gallery', component: GalleryComponent, title: 'Галерея | Эхо Черкесии' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
