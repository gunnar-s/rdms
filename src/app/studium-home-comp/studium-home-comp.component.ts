import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'studium-home-comp',
  imports: [],
  templateUrl: './studium-home-comp.component.html',
  styleUrl: './studium-home-comp.component.css'
})
export class StudiumHomeCompComponent {
  constructor(public configService: ConfigService) {}
}
