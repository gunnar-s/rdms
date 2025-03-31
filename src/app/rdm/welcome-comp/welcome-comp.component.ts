import { Component } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'welcome-comp',
  imports: [],
  templateUrl: './welcome-comp.component.html',
  styleUrl: './welcome-comp.component.css'
})
export class WelcomeCompComponent {
  constructor(public configService: ConfigService) {}
}
