import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'events',
  imports: [NgForOf],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  constructor(public dataservice: DataService) {}
}
