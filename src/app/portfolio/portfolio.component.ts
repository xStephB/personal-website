import {Component, EventEmitter, Output} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [
    TranslatePipe
  ],
  templateUrl: './portfolio.component.html',
  standalone: true,
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @Output() closeAll = new EventEmitter<void>();
}
