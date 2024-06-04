import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
export class SearchBoxComponent implements AfterViewInit {
  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}

  ngAfterViewInit(): void {
    // this.taginput.nativeElement.value = this.gifsService.tagsHistory[0];
  }

  searchTag() {
    const newTag = this.taginput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.clearSearchBox();
  }
  public clearSearchBox() {
    this.taginput.nativeElement.value = '';
  }
  public resetTag(value: string): void {
    this.taginput.nativeElement.value = value;
  }
}
