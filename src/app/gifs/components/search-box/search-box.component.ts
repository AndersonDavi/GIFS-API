import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <div class="d-flex p-3 flex-column flex-md-row ">
      <h5 style="margin-top: auto; margin-right:1rem">Buscar:</h5>
      <input
        type="text"
        class="form-control"
        placeholder="Busca Gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
        [value]="dafaultTag"
      />
    </div>
  `,
  standalone: true,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;
  @Output() search = new EventEmitter<string>();
  dafaultTag: string = '';
  constructor(private gifsService: GifsService) {
    this.setLastTag();
  }

  searchTag() {
    const newTag = this.taginput.nativeElement.value;
    this.gifsService.setSearchTag(newTag);
    this.setLastTag();
    console.log('SearchBoxComponent:',newTag);
    if (newTag) {
      this.search.emit(newTag);
    }
  }

  public setLastTag() {
    this.dafaultTag = this.gifsService.getSearchTag();
  }

  public clearSearchBox() {
    this.taginput.nativeElement.value = '';
  }
}
