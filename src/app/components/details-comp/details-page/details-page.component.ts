import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SpotifyService} from "../../../services/spotify.service";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  public albumId:any;
  public album:any;
  public tracks:any;
  constructor(private _activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
    //get id from url
    this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.albumId = paramMap.get('id')
    })

    //get album from service
    this._spotifyService.getSingleAlbum(this.albumId).subscribe((data) => {
      this.album = data;
    })

    //get tracks from service
    this._spotifyService.getTracksByAlbumId(this.albumId).subscribe((data) => {
      this.tracks = data.items;
    })



  }

}
function msToTime(s: number) {
  let ms = s % 1000;
  s = (s - ms) / 1000;
  let secs = s % 60;
  s = (s - secs) / 60;
  let mins = s % 60;
  let hrs = (s - mins) / 60;

  return hrs + ':' + mins + ':' + secs + '.' + ms;
}
