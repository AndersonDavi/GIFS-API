import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
    selector: 'gifs-home-page',
    templateUrl: './home-page.component.html',
    standalone: true,
    imports: [SearchBoxComponent, CardListComponent],
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }


}
