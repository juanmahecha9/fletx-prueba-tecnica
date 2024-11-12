import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Browser, Map, map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit {
  private apiKey: string = '7e84413996fa4839a97966cc967742a4';

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const initialState = {
      lat: 5.725311447610156, // Longitud
      lng: -73.45357556908868, // Latitud
      zoom: 6,
    };

    const lefletMap: Map = map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    const isRetina = Browser.retina;
    const baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${this.apiKey}`;
    const retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${this.apiKey}`;

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution:
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a>',
      apiKey: this.apiKey,
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(lefletMap);

    // Capturar las coordenadas y el zoom
    lefletMap.on('moveend', () => {
      const center = lefletMap.getCenter();
      const zoom = lefletMap.getZoom();
      console.log('Coordenadas actuales:', center.lat, center.lng);
      console.log('Zoom actual:', zoom);
    });

    lefletMap.on('zoomend', () => {
      const zoom = lefletMap.getZoom();
      console.log('Zoom actual:', zoom);
    });
  }
}
