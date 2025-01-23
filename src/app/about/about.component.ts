import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  @Input() dataNascita?: Date;

  @Output() closeAll = new EventEmitter<void>();

  etaAttuale?: number;

  protected readonly faXmark = faXmark;

  ngOnInit() {
    if(this.dataNascita){
      const oggi = new Date();
      this.etaAttuale = oggi.getFullYear() - this.dataNascita.getFullYear();
      const meseNascita = this.dataNascita.getMonth();
      const giornoNascita = this.dataNascita.getDate();
      const meseCorrente = oggi.getMonth();
      const giornoCorrente = oggi.getDate();
      if (meseCorrente < meseNascita || (meseCorrente === meseNascita && giornoCorrente < giornoNascita)) {
        this.etaAttuale--;
      }

    }
  }

  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
}
