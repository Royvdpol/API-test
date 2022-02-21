import {Component, OnInit} from '@angular/core'
import {GetapidataService} from "../../services/getapidata.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any[] = []

  constructor(private getapidataService: GetapidataService) {
  }

  ngOnInit() {
    this.getapidataService.getPhotoData().subscribe((photos: any) => {
      this.photos = photos;
    })
  }
}
