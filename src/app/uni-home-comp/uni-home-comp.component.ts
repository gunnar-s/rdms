import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'uni-home-comp',
  imports: [],
  templateUrl: './uni-home-comp.component.html',
  styleUrl: './uni-home-comp.component.css'
})
export class UniHomeCompComponent {
  constructor(public configService: ConfigService) {}
}
