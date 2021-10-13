import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SpotifyService} from "../../../services/spotify.service";
import {newArray} from "@angular/compiler/src/util";
import {map, startWith} from "rxjs/operators";

// const CACHE_KEY = 'httpRepoCache';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public searchQuery:string = ''
  public albums:any;
  data: Array<any> | undefined
  totalRecords: number = 0
  page:number=1
  public errBlock: boolean = false;
  public errorText: string = '';
  private pagesSet = new Set();


  constructor(private _spotifySearch: SpotifyService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {


  }

  //search Artists
  public searchAllAlbums(){
    this.errBlock = false
    this._spotifySearch.getTotalNumOfAlbums(this.searchQuery).subscribe((data) => {
      this.totalRecords = data.albums.total
    })
    this._spotifySearch.getAllAlbums(this.searchQuery,this.page,15).subscribe((data)=>{
      // this.errBlock = false;
     this.albums = data.albums.items
      this.pagesSet.add(1);

      //trying cache and pagination
      this.data = data.albums.items

      console.log('length: ' + this.totalRecords)
      //cache
      // localStorage[CACHE_KEY] = JSON.stringify(data)

    },error => {
      this.errBlock = true;
      this.errorText = 'Your requested search was not found, try something else';
    });
  }


  gty(page: any) {
    if (!this.pagesSet.has(page)){
      this.pagesSet.add(page)
      this._spotifySearch.getAllAlbums(this.searchQuery, page,30).subscribe((data) => {
        console.log(data)
        this.albums = this.albums.concat(data.albums.items);
        this.totalRecords = this.albums.length
        console.log('albums length: ' + this.albums.length)
      })
    }

  }

  }
