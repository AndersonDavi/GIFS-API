import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NgStyle } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgStyle, MaterialModule, SidebarComponent, HomePageComponent],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatDrawer;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  title = 'gifs-app';
}
