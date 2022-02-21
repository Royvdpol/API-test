import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsComponent} from "./components/albums/albums.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {AlbumComponent} from "./components/album/album.component";

const routes: Routes = [
  {path: '', component: AlbumsComponent},
  {path: 'photos', component: PhotosComponent},
  {
    path: 'albums',
    children: [
      {
        path: '',
        component: AlbumsComponent
      },
      {
        path: ':id',
        component: AlbumComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
