import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA4IXobTH8nGvzFq0wTyXahQ-aiVvFqZ-1nYNtPRmqK9V9iToqXJiUp-fK39KCcig93SNflB2VmBVj8apA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .subscribe(data => {
        console.log(data);
        
      })
  }
}
