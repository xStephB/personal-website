import {Component, EventEmitter, Output} from '@angular/core';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-backend',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './portfolio-backend.component.html',
  standalone: true,
  styleUrl: './portfolio-backend.component.scss'
})
export class PortfolioBackendComponent {
  @Output() closeAll = new EventEmitter<void>();
  protected readonly faXmark = faXmark;
}
