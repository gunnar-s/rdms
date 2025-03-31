import { Component } from '@angular/core';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'guidelines',
  imports: [],
  templateUrl: './guidelines.component.html',
  styleUrl: './guidelines.component.css'
})
export class GuidelinesComponent {
  constructor(public configService: ConfigService) {}
}
