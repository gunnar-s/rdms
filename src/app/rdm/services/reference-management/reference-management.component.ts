import { Component } from '@angular/core';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'reference-management',
  imports: [],
  templateUrl: './reference-management.component.html',
  styleUrl: './reference-management.component.css'
})
export class ReferenceManagementComponent {
  constructor(public configService: ConfigService) {}
}
