import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Busca Gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
    standalone: true,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.taginput.nativeElement.value;
    // console.log(this.gifsService.tagsHistory);
    this.gifsService.searchTag(newTag);
    this.taginput.nativeElement.value = '';
  }

  public resetTag(value: string): void {
    this.taginput.nativeElement.value = value;
  }
}
