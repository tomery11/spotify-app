import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input()
  imgUrl: string = '';
  @Input()
  band: string = '';
  @Input()
  albumTitle: string = '';
  @Input()
  albumId: string = '';
  constructor() { }


  public trimName(name: string){
    const length =9;
    let trimmedString = name
    if (name.length > length){
      // const string = name
      trimmedString = trimmedString.substring(0, length);

      trimmedString = trimmedString.concat('...')
      // console.log(trimmedString)

    }
    return trimmedString;


  }

  ngOnInit(): void {
  }

}

export interface IGalleryItem {
  imgUrl: string;
  band: string;
  albumTitle?: string;
  albumId?: string;
}
