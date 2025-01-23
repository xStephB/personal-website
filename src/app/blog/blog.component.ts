import {Component, EventEmitter, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  imports: [
    FaIconComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  @Output() closeAll = new EventEmitter<void>();
  protected readonly faXmark = faXmark;
}
