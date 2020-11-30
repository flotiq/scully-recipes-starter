import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Scully Recipes Starter';
  isHome = false;
  constructor(private location: Location) { }

  ngOnInit() {
    if (!this.location.path()) {
        this.isHome = true;
      }
  }
}
