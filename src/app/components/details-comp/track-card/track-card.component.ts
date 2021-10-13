import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {
  @Input()
  imgUrl: string = '';
  @Input()
  trackNumber: string = '';
  @Input()
  length: string = '';
  @Input()
  trackTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public trimName(name: string){
    const length =10;
    let trimmedString = name
    if (name.length > length){
      // const string = name
      trimmedString = trimmedString.substring(0, length);

      trimmedString = trimmedString.concat('...')
      // console.log(trimmedString)

    }
    return trimmedString;


  }

  public msToTime(sec: string) {
    let s = Number(sec)
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
    let secString= secs.toString()

    if (secs.toString().length === 1){
      secString = '0' + secString
    }

    let minString= mins.toString()

    if (minString.length === 1){
      minString = '0' + minString
    }

    return minString + ':' + secString ;
  }

}
export interface IGalleryItem {
  imgUrl: string;
  order: string;
  trackNumber?: string;
  length?: string;
}

