import {Component, OnInit} from '@angular/core';
import {Album, GetapidataService, Photo} from "../../services/getapidata.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = []
  photos: Photo[] = []
  photoCount = 3;

  constructor(private getapidataService: GetapidataService) {
  }

  ngOnInit() {
    this.getapidataService.getAlbumData().subscribe((albums: Album[]) => {
      this.albums = albums;
    })

    this.getapidataService.getPhotoData().subscribe((photos: Photo[]) => {
      this.photos = photos;
    })
  }

  getFilteredPhotos(albumId: number): Photo[] {
    return this.photos.filter(photo => photo.albumId === albumId).splice(0, this.photoCount)
  }

}
