import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  @Input('list') chunkList: Chunk[] = [];
  @Input() size = 400;

  constructor() { }

  ngOnInit(): void { }

  setStylesCake(): string {
    const w = `width: ${this.size}px`;
    const h = `height: ${this.size}px`;
    return `${w}; ${h};`;
  }

  setStylesChuck(idx: number, color: string): string {
    const c = `--color: ${ color }`;
    const r = `--rotate: -${ this.arcPercentage() * 3.6 * idx }deg`;
    const t = `--rotateContent: ${ this.arcPercentage() * 3.6 * idx }deg`;
    const b = `--sideBottom: ${ this.arcSideBottom() * 2 }px`;
    const l = `left: calc(${this.size/2}px - var(--sideBottom) / 2)`;
    const h = `height: ${this.size/2}px`;
    return `${r}; ${t}; ${c}; ${b}; ${l}; ${h};`;
  }

  private arcPercentage(): number {
    return 100.0 / this.chunkList.length;
  }

  private arcSide(): number {
    return 1.0 / Math.cos( ( this.arcPercentage() * 1.80) * Math.PI / 180.0);
  }

  private arcSideBottom(): number {
    return Math.sqrt( Math.pow(this.arcSide() * this.size/2, 2) - Math.pow( this.size/2, 2));
  }
}

export interface Chunk {
  title: string,
  color: string,
  imgUrl: string
}
