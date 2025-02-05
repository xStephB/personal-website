import {Component, EventEmitter, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  imports: [
    TranslatePipe
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  @Output() closeAll = new EventEmitter<void>();

  protected readonly faXmark = faXmark;
}
