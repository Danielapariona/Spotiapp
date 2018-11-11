import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any [] = [];
  loading: boolean;
  constructor(private searchService: SpotifyService) {
  }
  
  search(term: string) {
    this.loading = true;
    this.searchService.getArtists(term).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    })
  }
}
