import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetapidataService {

  constructor(private http: HttpClient) {
  }

  getPhotoData(): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(list => list.filter(photo => photo.albumId === albumId)))
  }

  getAlbumData(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').pipe(map(list => list.splice(0,5)))
  }
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Album {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
