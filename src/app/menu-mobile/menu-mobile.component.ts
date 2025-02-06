import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './menu-mobile.component.html',
  standalone: true,
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  @Input() menuMobile = false;

  @Output() toggleMenu = new EventEmitter<void>();
  @Output() viewContact = new EventEmitter<void>();
  @Output() viewBlog = new EventEmitter<void>();
  @Output() viewPortfolio = new EventEmitter<void>();
  @Output() viewPortfolioBackEnd = new EventEmitter<void>();
  @Output() viewResume = new EventEmitter<void>();
  @Output() viewAbout = new EventEmitter<void>();

  protected readonly faXmark = faXmark;
}
