import { Component } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'workshops',
  imports: [],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {
  constructor(public configService: ConfigService) {}
}
