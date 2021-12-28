import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Geolocation } from './geolocation.model';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  geolocation = new BehaviorSubject<Geolocation>({ browserEnabled: false });

  constructor(private http: HttpClient) {
    if ('geolocation' in navigator) {
      /* la géolocalisation est disponible */
      const that = this;
      navigator.geolocation.getCurrentPosition(function (position) {
        that
          .reverseGeocoding(position.coords.latitude, position.coords.longitude)
          .subscribe((geocod) => {
            console.log(geocod);
            that.geolocation.next({
              browserEnabled: true,
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
              location: geocod.results[0].formatted,
            });
          });
      });
    } else {
      /* la géolocalisation n'est pas disponible */
      this.geolocation.next({ browserEnabled: false });
    }
  }

  getGeoloc(): Observable<Geolocation> {
    return this.geolocation.asObservable();
  }

  private reverseGeocoding(
    latitude: number,
    longitude: number
  ): Observable<any> {
    const encodedGeolocation = encodeURIComponent(latitude + ',' + longitude);
    const request_url = `${environment.opencagedata.url}?key=${environment.opencagedata.key}&q=${encodedGeolocation}&pretty=1&no_annotations=1`;

    return this.http.get<any>(request_url);
  }
}
