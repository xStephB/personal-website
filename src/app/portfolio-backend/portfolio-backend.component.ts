import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-portfolio-backend',
  imports: [
    TranslatePipe
  ],
  templateUrl: './portfolio-backend.component.html',
  standalone: true,
  styleUrl: './portfolio-backend.component.scss'
})
export class PortfolioBackendComponent {
}
