import {Component} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {HomepageComponent} from './homepage';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ResumeComponent} from './resume/resume.component';
import {MenuMobileComponent} from './menu-mobile/menu-mobile.component';
import {PortfolioBackendComponent} from './portfolio-backend/portfolio-backend.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomepageComponent,
    ContactComponent,
    PortfolioComponent,
    ResumeComponent,
    MenuMobileComponent,
    PortfolioBackendComponent,
    AboutComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataNascita = new Date(2000, 7, 31);

  showContact = false;
  showBlog = false;
  showAbout = false;
  showResume = false;
  showPortfolio = false;
  showPortfolioBackEnd = false;
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

  viewPortfolioBackEnd() {
    this.showPortfolioBackEnd = true;
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
    this.showPortfolioBackEnd = false;
    this.showResume = false;
  }
}
