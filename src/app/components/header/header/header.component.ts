import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nal-jal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private componentName: string = "HeaderComponent : ";

  constructor() {
  }

  ngOnInit() {
  }
}
