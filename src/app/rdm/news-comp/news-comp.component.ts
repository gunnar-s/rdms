import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'news-comp',
  imports: [NgForOf],
  templateUrl: './news-comp.component.html',
  styleUrl: './news-comp.component.css'
})
export class NewsCompComponent {
  constructor(public dataservice: DataService) {}
}
