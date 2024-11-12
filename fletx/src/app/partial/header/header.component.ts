import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PROFILE_IMAGE } from '../../../resources/images/profile';
import { NOTIFICATION } from '../../../resources/images/notification';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public PROFILE_IMAGE: any;
  public NOTIFICATION: any;

  public info: { name: string; rol: string } = {
    name: 'Juan Apolinar',
    rol: 'Administrador',
  };

  constructor(private sanitizer: DomSanitizer) {
    this.PROFILE_IMAGE = this.sanitizer.bypassSecurityTrustHtml(PROFILE_IMAGE);
    this.NOTIFICATION = this.sanitizer.bypassSecurityTrustHtml(NOTIFICATION);
  }
}
