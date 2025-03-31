import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'forschen-home-comp',
  imports: [RouterModule],
  templateUrl: './forschen-home-comp.component.html',
  styleUrl: './forschen-home-comp.component.css'
})
export class ForschenHomeCompComponent {
  constructor(public configService: ConfigService) {}
}
