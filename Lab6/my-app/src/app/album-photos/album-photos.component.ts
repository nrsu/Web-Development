import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../album.service";
import {Photos} from "./model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photos[];
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.photos=[];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('albumId'))
      this.albumService.getPhoto(id).subscribe((photo)=>{
        this.photos=photo
      })
    })

  }
}
