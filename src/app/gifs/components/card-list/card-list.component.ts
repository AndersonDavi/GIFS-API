import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifCardComponent } from '../gif-card/gif-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  standalone: true,
  imports: [NgFor, GifCardComponent],
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
