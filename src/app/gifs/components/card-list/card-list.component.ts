import { Component, Input, SimpleChanges } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifCardComponent } from '../gif-card/gif-card.component';
import { NgFor } from '@angular/common';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  standalone: true,
  imports: [NgFor, GifCardComponent],
})
export class CardListComponent {
  @Input() searchTag: string = '';
  constructor(private gifsService: GifsService) {
    console.log('constructor', this.searchTag);

    // console.log('Consulta data card-list');
    this.getData('');
  }

  gifs: Gif[] = [];
  column1: Gif[] = [];
  column2: Gif[] = [];
  column3: Gif[] = [];
  column4: Gif[] = [];

  async getData(newSearch: string) {
    try {
      this.gifs = [];
      this.column1 = [];
      this.column2 = [];
      this.column3 = [];
      this.column4 = [];
      const response = await this.gifsService.getGifs(newSearch).toPromise();
      this.divideGifsIntoColumns(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchTag'].currentValue) {
      console.log('Consulta data card-list');
      console.log(changes);
      this.getData(this.searchTag);
    }
  }

  ngOnInit(): void {}

  private divideGifsIntoColumns(gifs: Gif[]): void {
    gifs.forEach((gif, index) => {
      if (index % 4 === 0) {
        this.column1.push(gif);
      } else if (index % 4 === 1) {
        this.column2.push(gif);
      } else if (index % 4 === 2) {
        this.column3.push(gif);
      } else {
        this.column4.push(gif);
      }
    });
  }
}
