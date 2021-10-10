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

  ngOnInit(): void {
  }

}

export interface IGalleryItem {
  imgUrl: string;
  band: string;
  albumTitle?: string;
  albumId?: string;
}
