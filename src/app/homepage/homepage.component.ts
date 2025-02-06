import {Component, ElementRef, inject, Input, OnInit, Renderer2} from '@angular/core';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-homepage',
  imports: [
    TranslatePipe,
    FaIconComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true
})
export class HomepageComponent implements OnInit {
  private translate = inject(TranslateService);

  @Input() dataNascita?: Date;

  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;

  ita = 'it';
  eng = 'en';

  lineCount = 40;
  minCharCount = 20;
  maxCharCount = 40;
  mainHeight = 0;
  mainWidth = 0;
  topPos = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.changeToIta();
    setTimeout(() => {
      const main = this.el.nativeElement.querySelector('.bg-component');
      if (main) {
        this.mainWidth = main.offsetWidth;
        this.mainHeight = main.offsetHeight;
        this.generateLines();
      } else {
        console.error("Animazione non disponibile!");
      }
    }, 100);
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getLineChar(length: number): string {
    const characters = '01';
    return Array.from({length}, () => characters.charAt(this.random(0, characters.length))).join('');
  }

  generateLines(): void {
    for (let i = 0; i < this.lineCount; i++) {
      const index = i;
      const charCount = this.random(this.minCharCount, this.maxCharCount);
      const opacity = this.random(6, 9) / 10;
      const position = this.random(0, this.mainWidth);
      const tick = this.random(300, 500);
      this.createLine(index, charCount, opacity, position, tick);
    }
  }

  createLine(index: number, charCount: number, opacity: number, position: number, tick: number): void {
    setTimeout(() => {
      const line = this.renderer.createElement('div');
      this.renderer.addClass(line, 'lines');
      this.renderer.setStyle(line, 'opacity', opacity.toString());
      this.renderer.setStyle(line, 'left', `${position}px`);
      this.renderer.setStyle(line, 'top', `-${this.topPos}px`);
      this.renderer.setStyle(line, 'z-index', `-1`);
      this.renderer.setAttribute(line, 'id', `line${index}`);

      const lineText = this.renderer.createElement('span');
      this.renderer.setProperty(lineText, 'innerHTML', this.getLineChar(charCount));

      const lineDiv = this.renderer.createElement('div');
      this.renderer.appendChild(line, lineDiv);
      this.renderer.appendChild(line, lineText);

      const main = this.el.nativeElement.querySelector('.bg-component');
      this.renderer.appendChild(main, line);

      this.animateLine(index, charCount, tick);
    }, tick + index * 1000);
  }

  animateLine(index: number, charCount: number, tick: number): void {
    const elem = this.el.nativeElement.querySelector(`#line${index}`);
    if (!elem) {
      console.warn(`Elemento #line${index} non trovato!`);
      return;
    }
    let pos = -this.mainHeight;
    const interval = setInterval(() => {
      if (pos >= this.mainHeight + this.topPos + 500) {
        clearInterval(interval);
        this.renderer.setStyle(elem, 'top', `-${this.mainHeight}px`);
        this.animateLine(index, charCount, tick);
      } else {
        pos++;
        this.renderer.setStyle(elem, 'top', `${pos}px`);
      }
    }, this.random(1, 10));
  }

  changeToIta() {
    this.translate.use(this.ita);
  }

  changeToEng() {
    this.translate.use(this.eng);
  }

}
