import {Component} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {HomepageComponent} from './homepage';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutComponent} from './about/about.component';
import {MenuMobileComponent} from './menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomepageComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent,
    AboutComponent,
    MenuMobileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataNascita = new Date(2000, 7, 31);

  showContact = false;
  showBlog = false;
  showAbout = false;
  showResume = false;
  showPortfolio = false;
  menuMobile = false;

  viewContact() {
    this.showContact = true;
  }

  viewBlog() {
    this.showBlog = true;
  }

  viewAbout() {
    this.showAbout = true;
  }

  viewResume() {
    this.showResume = true;
  }

  viewPortfolio() {
    this.showPortfolio = true;
  }

  toggleMenu() {
    this.menuMobile = !this.menuMobile;
  }

  closeAll() {
    this.menuMobile = false;
    this.showContact = false;
    this.showBlog = false;
    this.showAbout = false;
    this.showPortfolio = false;
    this.showResume = false;
  }
}
