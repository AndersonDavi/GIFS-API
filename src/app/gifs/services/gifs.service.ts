import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from 'src/environments/environments';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifsService {
  public searchValue: string = '';
  private _tagsHistory: string[] = [];
  private GIPHY_API_KEY: string = environment.API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  getGifs(newSearch?: string) {
    console.log('api usada');

    if (newSearch) {
      this.searchValue = newSearch;
    }
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('limit', '40')
      .set('q', this.searchValue);

    return this.http.get<any>(`${this.serviceUrl}/search?`, { params }).pipe(
      tap((resp) => {
        console.log(resp.data);
      })
    );
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  setSearchTag(tag: string): void {
    tag = tag.trim();
    if (tag.length >= 1) {
      this.sortHistory(tag);
    }
    this.searchValue = tag;
  }
  getSearchTag() {
    return this.searchValue;
  }

  private sortHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 13);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.setSearchTag(this._tagsHistory[0]);
  }
}
