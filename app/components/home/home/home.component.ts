import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header/header.component';
import { MainComponent } from '../main/main.component';
import { ConsorcioComponent } from '../../consorcio/consorcio/consorcio.component';
import { AlavacComponent } from '../../alavac/alavac/alavac.component';
import { StrategyComponent } from '../../strategy/strategy/strategy.component';
import { ConhecaConsoriComponent } from '../../conheca-consori/conheca-consori/conheca-consori.component';
import { InspireComponent } from '../../inspire/inspire/inspire.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, 
    MainComponent, 
    ConsorcioComponent, 
    AlavacComponent, 
    StrategyComponent,
    ConhecaConsoriComponent,
    InspireComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
