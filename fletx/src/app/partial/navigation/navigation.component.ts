import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemListComponent } from './item-list/item-list.component';
import { HeaderComponent } from '../header/header.component';

// Define la interfaz para las subcategorías
interface Subcategory {
  title: string;
  icon: string;
  subcategories: Subcategory[]; // Subcategorías anidadas opcionales
}

// Define la interfaz principal para las categorías
interface Category {
  title: string;
  icon: string;
  subcategories: Subcategory[]; // Las categorías principales tienen subcategorías obligatorias
}
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ItemListComponent, HeaderComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  options: Category[] = [
    {
      title: 'Pre-Operación',
      icon: 'preOp',
      subcategories: [
        { title: 'Clientes', icon: 'cli', subcategories: [] },
        { title: 'Plantas', icon: 'pla', subcategories: [] },
        { title: 'Generadores de carga', icon: 'genCarga', subcategories: [] },
        { title: 'Productos', icon: 'prod', subcategories: [] },
        { title: 'Zonas de riesgo', icon: 'zonaRiesgo', subcategories: [] },
        {
          title: 'Conductores y vehículos',
          icon: 'condVeh',
          subcategories: [
            { title: 'Conductores', icon: 'cond', subcategories: [] },
            { title: 'Vehículos', icon: 'veh', subcategories: [] },
            { title: 'Trailers', icon: 'trail', subcategories: [] },
            {
              title: 'Propietario - Poseedor',
              icon: 'propPose',
              subcategories: [],
            },
            {
              title: 'Estaciones combustible',
              icon: 'estComb',
              subcategories: [],
            },
          ],
        },
        {
          title: 'Tablas maestras',
          icon: 'tablMstr',
          subcategories: [
            { title: 'Comercial', icon: 'com', subcategories: [] },
            {
              title: 'Tráfico y monitoreo',
              icon: 'trafMon',
              subcategories: [],
            },
            {
              title: 'Finanzas y contabilidad',
              icon: 'finCont',
              subcategories: [],
            },
            { title: 'Sistemas', icon: 'sist', subcategories: [] },
          ],
        },
      ],
    },
    {
      title: 'Operación',
      icon: 'oper',
      subcategories: [
        { title: 'TruckBoard', icon: 'tb', subcategories: [] },
        { title: 'Tráfico y monitoreo', icon: 'trafMon', subcategories: [] },
        { title: 'Servicios activos', icon: 'servAct', subcategories: [] },
        { title: 'Historial servicios', icon: 'histServ', subcategories: [] },
        {
          title: 'Vehículos sin ubicación',
          icon: 'vehSinUb',
          subcategories: [],
        },
        {
          title: 'Anticipos y transacciones',
          icon: 'antTran',
          subcategories: [],
        },
        { title: 'Manejo tarjetas', icon: 'manTarj', subcategories: [] },
        { title: 'Negocios realizados', icon: 'negReal', subcategories: [] },
        {
          title: 'Planificador de servicios',
          icon: 'planServ',
          subcategories: [],
        },
        { title: 'Soporte a conductor', icon: 'sopCond', subcategories: [] },
        {
          title: 'Reportes inasistencia',
          icon: 'repInasist',
          subcategories: [],
        },
      ],
    },
    {
      title: 'Configuración',
      icon: 'conf',
      subcategories: [{ title: 'Usuarios', icon: 'usr', subcategories: [] }],
    },
  ];
}
