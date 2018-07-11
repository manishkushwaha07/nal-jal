import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nal-jal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Running HomeComponent Constructor ");
  }

}
