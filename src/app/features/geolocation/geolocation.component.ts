import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {
  title = 'Geolocation';
  infos = new Map();
  alert: string | undefined = undefined;
  constructor(private geoloc: GeolocationService) {}

  ngOnInit(): void {
    this.geoloc.getGeoloc().subscribe((loc) => {
      const result = new Map();
      if (!loc.browserEnabled) {
        this.alert = 'Geolocation not enabled';
      } else {
        this.alert = undefined;
        result.set('Latitude', loc.latitude);
        result.set('Longitude', loc.longitude);
        result.set('Location', loc.location);
        this.infos = result;
      }
    });
  }
}
