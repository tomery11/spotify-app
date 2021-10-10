import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId = '5f0c28d9f87446afab2878ce1b0f75e6';
  private secret = '2519394ac0084dc88313bb4443c4e001'
  private encodedID = btoa(this.clientId + ':' + this.secret);
  private authToken: any;


  private authKey = "Bearer BQC51rN7FpCfPhsj-i1z28Lg-9UTdmijjzZJGwHjhxKvsm1LcwrgRKedPOaO9ulTbCIMn-f3LD4fK6J5_mijPjlwzV5ulo-sA6nOK-E6Pr6dXf40hCLgL6PBGvB4NYburQkPqx0aUujKdx6S"
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authKey
    })
  }



  constructor(private _httpClient: HttpClient) {
    console.log('going to make the token request');

    var token = this.spotifyApiToken().subscribe(res => {
      this.authToken = res.access_token
    });
    console.log('token: ' + token);
  }

  spotifyApiToken() {
    let authUrl = "https://accounts.spotify.com/api/token"
    const authHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + this.encodedID
      }),

    }
    //The parameter is what type of token we're asking for

    //The header has the authorization code and the app name
    let params: URLSearchParams = new URLSearchParams();
    let testToken = '';
    params.set('grant_type', 'client_credentials');
    let body = params.toString();
    return this.authToken = this._httpClient.post<any>(authUrl, body, authHttpOptions).pipe(
      tap( // Log the result or error
        data => {
          console.log( data)
          this.authToken = 'Bearer ' + data['access_token'];
          console.log(testToken)
          // this.httpOptions.headers.set('Authorization','Bearer ' + data['access_token'])
          this.httpOptions.headers.append('Authorization','Bearer ' + data['access_token'])
          // this.authToken ='Bearer ' + data['access_token']
          console.log('http: ' + this.httpOptions.headers)
          // return this.authToken;

        },
        error => console.log( error)
      )
    );
    // return this._httpClient.post<any>(authUrl, authHttpOptions)

  }




  //get all Albums
  public getAllAlbums(searchQuery: string): Observable<any> {

    let artistUrl = "https://api.spotify.com/v1/search?q=" + searchQuery + "&type=album%2Cartist&limit=15"
    console.log(JSON.stringify(this.httpOptions.headers))
    return this._httpClient.get<any>(artistUrl, this.httpOptions)
  }

  public getSingleAlbum(albumId: string): Observable<any> {
    let albumsUrl = "https://api.spotify.com/v1/albums/" + albumId;
    return this._httpClient.get<any>(albumsUrl, this.httpOptions)
  }

  public getTracksByAlbumId(albumId: string): Observable<any> {
    let tracksUrl = "https://api.spotify.com/v1/albums/" + albumId + '/tracks';
    return this._httpClient.get<any>(tracksUrl, this.httpOptions)
  }


}


