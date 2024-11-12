import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgFor } from '@angular/common';
import { MapComponent } from '../../components/map/map.component';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { NavigationComponent } from '../../partial/navigation/navigation.component';
import { TrackComponent } from '../../components/track/track.component';
import { NewServiceComponent } from '../../components/new-service/new-service.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [
    CardComponent,
    NgFor,
    MapComponent,
    NotificationsComponent,
    NavigationComponent,
    TrackComponent,
    NewServiceComponent,
  ],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css',
})
export class OneComponent {
  cards: { name: string; data: 574; color: string }[] = [
    {
      name: 'Cond. Activo',
      data: 574,
      color: 'green_ligth',
    },
    {
      name: 'Cond. Disponibles',
      data: 574,
      color: 'yellow',
    },
    {
      name: 'Cond. En servicios',
      data: 574,
      color: 'green',
    },
    {
      name: 'Cond. Indicativos',
      data: 574,
      color: 'grey_ligth',
    },
    {
      name: 'Cond. por aprobar',
      data: 574,
      color: 'grey',
    },
  ];
}
