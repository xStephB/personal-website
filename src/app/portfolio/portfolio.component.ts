import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './portfolio.component.html',
  standalone: true,
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{
  @Output() closeAll = new EventEmitter<void>();
  protected readonly faXmark = faXmark;
  @ViewChild('gallery', { static: false }) gallery!: ElementRef;
  private iteration = 0;
  private spacing = 0.1;
  private cards: HTMLElement[] = [];

  ngAfterViewInit(): void {
    this.cards = Array.from(document.querySelectorAll('.cards li'));
    this.setInitialState();
    this.setupScrollListener();
  }

  private setInitialState(): void {
    this.cards.forEach(card => {
      card.style.transform = 'translateX(400%) scale(0)';
      card.style.opacity = '0';
    });
  }

  private setupScrollListener(): void {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      let st = window.scrollY;
      if (st > lastScrollTop) {
        this.animateCards();
      }
      lastScrollTop = st;
    });
  }

  private animateCards(): void {
    this.cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        card.style.transform = 'translateX(0) scale(1)';
        card.style.opacity = '1';
      }, index * this.spacing * 1000);
    });
  }

  scrollNext(): void {
    this.iteration++;
    this.scrollToOffset(this.iteration * this.spacing);
  }

  scrollPrev(): void {
    this.iteration--;
    this.scrollToOffset(this.iteration * this.spacing);
  }

  private scrollToOffset(offset: number): void {
    window.scrollTo({ top: offset * window.innerHeight, behavior: 'smooth' });
  }
}
