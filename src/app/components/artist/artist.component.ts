import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  constructor(private _activatedRouter: ActivatedRoute) {
    this._activatedRouter.params.subscribe(params => {
      console.log(params['id']);
    })
  }
}
