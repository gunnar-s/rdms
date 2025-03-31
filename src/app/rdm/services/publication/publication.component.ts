import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'publication',
  imports: [RouterModule],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css'
})
export class PublicationComponent {
  constructor(public configService: ConfigService) {}
}
