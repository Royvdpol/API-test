import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetapidataService, Photo} from "../../services/getapidata.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private getapidataService: GetapidataService) {
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')??'0');
    this.getapidataService.getPhotosByAlbumId(id).subscribe(photos => {
      this.photos = photos
    });
  }
}
