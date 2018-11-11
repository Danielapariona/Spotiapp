import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWNcbYWV8NdpaEbGXVcaN6DSb9cVHfU4X3gwSVsE7U6rWBNFtuEN8-7ltUGtBLYHD9w_uYDoFFP0cCj6E'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWNcbYWV8NdpaEbGXVcaN6DSb9cVHfU4X3gwSVsE7U6rWBNFtuEN8-7ltUGtBLYHD9w_uYDoFFP0cCj6E'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${term}&type=artist&market=PE&offset=0&limit=15`, { headers });
  }
}
