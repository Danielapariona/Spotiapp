import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;

  constructor(private _activatedRouter: ActivatedRoute, private _artistService: SpotifyService) {
    this.loading = true;
    this._activatedRouter.params.subscribe(params => {
      this.getArtist(params['id']);
    })
  }

  getArtist(id: string) {
    this.loading = true;
    this._artistService.getArtist(id).subscribe(artista => {
      this.artist = artista;
      this.loading = false;
    });
  }
}
