import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import infrastructureJson from '../../../../public/infrastructure.json';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'infrastructure',
  imports: [NgForOf],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.css'
})
export class InfrastructureComponent {
  infrastructures: Infrastructures = infrastructureJson;
}

type Infrastructures = {
  laboratories: Infrastructure[],
  facilities: Infrastructure[]
}
type Infrastructure = {
  name: string,
  description: string,
  room: string,
  link: string,
  contact: string
}
