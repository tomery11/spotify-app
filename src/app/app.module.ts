import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { DetailsPageComponent } from './components/details-comp/details-page/details-page.component';
import { TrackCardComponent } from './components/details-comp/track-card/track-card.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-comp/home-page/home-page.component';
import {SpotifyService} from "./services/spotify.service";
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    DetailsPageComponent,
    TrackCardComponent,
    HomePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'albums/:id', component: DetailsPageComponent, pathMatch : 'full'}

    ]),
    HttpClientModule,
    FormsModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
