import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newSongs: any [] = [];
  loading: boolean;
  show: boolean;
  message: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.show = false;
    this.spotify.getToken().subscribe((token: any) => {
      localStorage.setItem('token', token.access_token);
      setTimeout(() => {
        this.spotify.getNewReleases().subscribe(( data: any ) => {
          this.newSongs = data;
          this.loading = false;
        }, errorService => {
          this.loading = false;
          this.show = true;
          this.message = errorService.error.error.message;
        });
      }, 300);
    });
  }
}
