import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'events-comp',
  imports: [NgForOf],
  templateUrl: './events-comp.component.html',
  styleUrl: './events-comp.component.css'
})
export class EventsCompComponent {
  constructor(public dataservice: DataService) {}
}
