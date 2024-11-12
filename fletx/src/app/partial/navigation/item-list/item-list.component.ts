import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MENU_ICONS } from '../../../../resources/images/menu';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';

interface Subcategory {
  title: string;
  icon: string;
  subcategories: Subcategory[]; // Subcategorías anidadas opcionales
}

@Component({
  selector: 'app-item-list-sub',
  template: `
    <li
      class="flex gap-2 my-2"
      data-dropdown-toggle="dropdownDivider"
      (click)="toggleDropdown()"
    >
      <div [innerHTML]="IMG"></div>
      <h2 style="font-size: 0.9rem" class="font-semibold">{{ title }}</h2>
      <!-- Flecha para indicar si está abierto o cerrado -->
      @if(subcategorie.length){
      <div class="p-2">
        <svg
          class="w-2.5 h-2.5 ms-3 transform transition-transform duration-200"
          [ngClass]="{ 'rotate-180': is_open }"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      }
    </li>
    @if(subcategorie.length && is_open){
    <div class="ml-4">
      <ul>
        @for (item of subcategorie; track $index) {
        <app-item-list-sub
          [image]="item.icon"
          [title]="item.title"
          [subcategorie]="item.subcategories"
        />
        }
      </ul>
    </div>
    }
  `,
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [NgClass, NgFor, NgIf, JsonPipe],
})
export class ItemListSubComponent implements OnInit {
  @Input() image: string = '<svg></svg>';
  @Input() title: string = 'Pre-Operación';
  @Input() subcategorie: any[] = [];

  is_open: boolean = false;

  public IMG: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.IMG = this.sanitizer.bypassSecurityTrustHtml(MENU_ICONS[this.image]);
  }

  toggleDropdown() {
    this.is_open = !this.is_open;
  }
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [NgClass, NgFor, NgIf, JsonPipe, ItemListSubComponent],
})
export class ItemListComponent implements OnInit {
  @Input() image: string = '<svg></svg>';
  @Input() title: string = 'Pre-Operación';
  @Input() subcategorie: Subcategory[] = [];

  is_open: boolean = false;

  public IMG: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.IMG = this.sanitizer.bypassSecurityTrustHtml(MENU_ICONS[this.image]);
  }

  toggleDropdown() {
    this.is_open = !this.is_open;
  }
}
