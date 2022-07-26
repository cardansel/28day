import { Component, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Argentina', 'EE.UU.', 'Brazil'];
  name !: string;
  titleWeb = '28day';
  subTitle = 'Testing';
  selection!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change->', changes);
  }

  ngOnInit(): void {
    console.log('OnInit-> ');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  onCityClicked(city: string): void {
    console.log('City->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }
}
