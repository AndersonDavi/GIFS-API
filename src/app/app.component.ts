import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NgStyle } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';
import { SearchBoxComponent } from "./gifs/components/search-box/search-box.component";
import { CardListComponent } from "./gifs/components/card-list/card-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgStyle, MaterialModule, SidebarComponent, HomePageComponent, SearchBoxComponent, CardListComponent],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatDrawer;
  title = 'gifs-app';
  searchQuery: string = '';

  toggleSidenav() {
    this.sidenav.toggle();
  }

  onSearchUpdated(query: any) {
    console.log('AppComponent:',query);
    this.searchQuery = query;
  }
}
