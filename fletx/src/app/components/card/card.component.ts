import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CARDS_IMAGES } from '../../../resources/images/cards';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() image: string = 'green';
  @Input() title: string = 'Con. Activo';
  @Input() amount: number = 574;
  public CARD: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.CARD = this.sanitizer.bypassSecurityTrustHtml(
      CARDS_IMAGES[this.image]
    );
  }
}
