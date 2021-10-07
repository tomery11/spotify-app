import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { DetailsPageComponent } from './components/details-comp/details-page/details-page.component';
import { TrackCardComponent } from './components/details-comp/track-card/track-card.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-comp/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    DetailsPageComponent,
    TrackCardComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'albums', component: DetailsPageComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
