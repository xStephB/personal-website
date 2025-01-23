import {Component, EventEmitter, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faEnvelope, faLocationCrosshairs, faPhone, faSignature, faXmark} from '@fortawesome/free-solid-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Output() closeAll = new EventEmitter<void>();

  protected readonly faXmark = faXmark;
  protected readonly faSignature = faSignature;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLocationCrosshairs = faLocationCrosshairs;
}
