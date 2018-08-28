import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nal-jal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Running HomeComponent Constructor ");
  }

}
