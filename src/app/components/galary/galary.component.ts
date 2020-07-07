import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../../image.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnChanges {

  images: any[];
  filterBy = 'all';
 allImages: any[] = [];
  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }

}
