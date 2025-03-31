import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../../config.service';

@Component({
  selector: 'coderepos',
  imports: [RouterModule],
  templateUrl: './coderepos.component.html',
  styleUrl: './coderepos.component.css'
})
export class CodereposComponent {
  constructor(public configService: ConfigService) {}
}
