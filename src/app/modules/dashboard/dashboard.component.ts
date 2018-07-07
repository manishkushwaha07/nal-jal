import { Component, OnInit } from '@angular/core';
import { GlobalConfiguration } from '../../config/global.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private globalConfiguration : GlobalConfiguration, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

  public menuClicked(menu: any): void {
    if (menu) {
      this.router.navigate([menu], { relativeTo: this.route });
    }
  }
}
