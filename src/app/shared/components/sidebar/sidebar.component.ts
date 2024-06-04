import {
  Component,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { MatDrawer } from '@angular/material/sidenav';
import { GIFTitleCheckboxComponent } from '../giftitle-checkbox/giftitle-checkbox.component';
import { NgFor, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SearchBoxComponent } from '../../../gifs/components/search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [MatIconModule, NgFor, GIFTitleCheckboxComponent, TitleCasePipe],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  @Output() closeMenu = new EventEmitter<void>();
  @ViewChild('sidenav') sidenav!: MatDrawer;

  closeSidenav() {
    this.sidenav.close();
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }
}
