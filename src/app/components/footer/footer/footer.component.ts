import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nal-jal-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Initialising footer");
  }

}
