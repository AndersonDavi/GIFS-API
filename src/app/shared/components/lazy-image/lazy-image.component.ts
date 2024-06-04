import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, NgIf } from '@angular/common';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  standalone: true,
  imports: [NgStyle, NgIf],
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Val url not found');
  }
  onLoad() {
    this.hasLoaded = true;
    //    setTimeout(() => {}, 500);
  }
}
