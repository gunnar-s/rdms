import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'news',
  imports: [NgForOf],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  constructor(public dataservice: DataService) {}
}
