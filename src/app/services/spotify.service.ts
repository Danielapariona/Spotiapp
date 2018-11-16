import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getToken() {
    const URL = 'https://spotify-get-token.herokuapp.com/spotify/90e10407502d4ebc9b54e8d1fdf50579/cc032fb1984748d0b1e5a5b7ba1145e8';
    return this.http.get(URL);
  }

  getQuery(query: string) {
    // this.getToken();
    const token = localStorage.getItem('token');
    console.log(token);

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?query=${term}&type=artist&market=PE&offset=0&limit=15`)
                .pipe( map( data =>  data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }
}
