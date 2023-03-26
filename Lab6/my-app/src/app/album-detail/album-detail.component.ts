import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Album} from "../albums/models";
import {ALBUMS} from "../albums/fake-db";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album={} as Album;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('albumId'))
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album=album
      })
    })

  }
}

