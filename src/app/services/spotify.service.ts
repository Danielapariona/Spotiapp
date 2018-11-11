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
      'Authorization': 'Bearer BQBWNcbYWV8NdpaEbGXVcaN6DSb9cVHfU4X3gwSVsE7U6rWBNFtuEN8-7ltUGtBLYHD9w_uYDoFFP0cCj6E'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items));
  }

  getArtist(term: string) {
    return this.getQuery(`search?query=${term}&type=artist&market=PE&offset=0&limit=15`)
                .pipe( map( data =>  data['artists'].items));
  }
}
