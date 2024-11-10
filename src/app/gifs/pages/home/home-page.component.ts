import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
})
export class HomePageComponent {
  @Input() search: string = '';
  @ViewChild(CardListComponent) cardListComponent!: CardListComponent;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['search'] && this.cardListComponent) {
      // this.cardListComponent.getData(this.search); 
    }
  }
}
