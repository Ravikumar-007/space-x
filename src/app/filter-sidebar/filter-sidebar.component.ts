import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit {
  launchYear: number;
  launchSuccess: boolean = false;
  landSuccess: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onYearClick(year) {
    this.launchYear = year;
    console.log(typeof(this.launchYear));
    alert(`launch success ${year}`);
    alert(`launch success ${this.launchSuccess}`);
    alert(`land success ${this.landSuccess}`);
  }
  onLaunchClick(launchFlag) {
    this.launchSuccess = launchFlag;
    alert(`launch success ${this.launchSuccess}`);
  }
  onLandClick(landFlag) {
    this.landSuccess = landFlag;
    alert(`land success ${this.landSuccess}`);
  }

}
