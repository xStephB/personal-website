import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faBars}from '@fortawesome/free-solid-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  @Input() menuMobile = false;

  @Output() viewContact = new EventEmitter<void>();
  @Output() viewBlog = new EventEmitter<void>();
  @Output() viewPortfolio = new EventEmitter<void>();
  @Output() viewResume = new EventEmitter<void>();
  @Output() viewAbout = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();

  protected readonly faBars = faBars;
}
