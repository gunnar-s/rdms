import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'elab',
  imports: [RouterModule],
  templateUrl: './elab.component.html',
  styleUrl: './elab.component.css'
})
export class ElabComponent {
  constructor(public configService: ConfigService) {}
}
