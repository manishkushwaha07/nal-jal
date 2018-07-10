import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nal-jal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private componentName: string = "HeaderComponent : ";

  constructor(private router : Router, private route: ActivatedRoute,) {
  }

  ngOnInit() {
  }

  public menuClicked(menu : any) : void{
    if(menu){
        this.router.navigate([menu]);
    }
  }
}
