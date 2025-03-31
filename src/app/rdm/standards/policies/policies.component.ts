import { Component } from '@angular/core';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'policies',
  imports: [],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {
  constructor(public configService: ConfigService) {}
}
