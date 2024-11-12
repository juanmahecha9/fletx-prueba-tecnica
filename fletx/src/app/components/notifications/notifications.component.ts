import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgFor],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  public data: { message: string; btn: string }[] = [
    {
      message:
        'El conductor <strong>Andrés Vélez</strong> está próximo a finalizar el servicio <strong>SVC.123456</strong> en Barranquilla.',
      btn: 'Asignar servicio',
    },
    {
      message: 'El conductor <strong>Andrés Vélez</strong> excede la velocidad',
      btn: 'Ver detalle',
    },
    {
      message:
        'El conductor <strong>Andrés Vélez</strong> está próximo a finalizar el servicio <strong>SVC.123456</strong> en Barranquilla.',
      btn: 'Asignar servicio',
    },
    {
      message:
        'El conductor <strong>Andrés Vélez</strong> está próximo a finalizar el servicio <strong>SVC.123456</strong> en Barranquilla.',
      btn: 'Asignar servicio',
    },
  ];
}
