import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MainComponent } from './components/home/main/main.component';
import { ConsorcioComponent } from './components/consorcio/consorcio/consorcio.component';
import { StrategyComponent } from './components/strategy/strategy/strategy.component';
import { ConhecaConsoriComponent } from './components/conheca-consori/conheca-consori/conheca-consori.component';
import { InspireComponent } from './components/inspire/inspire/inspire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HomeComponent, 
    MainComponent, 
    ConsorcioComponent, 
    StrategyComponent,
    ConhecaConsoriComponent,
    InspireComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-consori';
}
