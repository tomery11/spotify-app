import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SpotifyService} from "../../../services/spotify.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public searchQuery:string = ''
  public albums:any;


  constructor(private _spotifySearch: SpotifyService) { }

  ngOnInit(): void {


  }

  //search Artists
  public searchAllAlbums(){
    this._spotifySearch.getAllAlbums(this.searchQuery).subscribe((data)=>{

     this.albums = data.albums.items
    })
  }


}
