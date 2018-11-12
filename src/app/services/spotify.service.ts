import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer  BQBHm2z_1L_H2JuU51yt2IB-Y6IBQTIrSpkASUCxvwlY7MAdOMVX_9p1XyJq4w0iEETnmbCsVn8Q_OXuIDM'
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
                .pipe( map( data => data['tracks']))
  }
}
