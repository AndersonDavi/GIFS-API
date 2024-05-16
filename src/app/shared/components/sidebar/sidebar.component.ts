import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
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
