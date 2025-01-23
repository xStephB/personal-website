import {Component, inject, OnInit} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  private translate = inject(TranslateService);

  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;

  ita = 'it';
  eng = 'en';

  ngOnInit() {
    this.changeToIta();
  }

  changeToIta() {
    this.translate.use(this.ita);
  }

  changeToEng() {
    this.translate.use(this.eng);
  }

}
