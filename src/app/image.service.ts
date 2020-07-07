import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  allImages = [];

    getImages() {
        return this.allImages = ImageDetails.slice(0);
    }

    getImage(id: number) {
        return ImageDetails.slice(0).find(Images => Images.id === id);
    }
}
const ImageDetails = [
  { id: 1,  url: '../assets/images/1.jpg' },
  { id: 2,  url: '../assets/images/2.jpg' },
  { id: 3,  url: '../assets/images/3.jpg' },
  { id: 4,  url: '../assets/images/4.jpg' },
  { id: 5,  url: '../assets/images/5.jpg' },
  { id: 6,  url: '../assets/images/n1.jpg' },
  { id: 7,  url: '../assets/images/n2.jpg' },
  { id: 8,  url: '../assets/images/n3.jpg' },
  { id: 9,  url: '../assets/images/n4.jpg' },
  { id: 10,  url: '../assets/images/n5.jpg' },
  { id: 11,  url: '../assets/images/n6.jpg' },
  { id: 12,  url: '../assets/images/6.jpg' },
  { id: 13,  url: '../assets/images/7.jpg' },
  { id: 14,  url: '../assets/images/8.jpg' },
  { id: 15,  url: '../assets/images/9.jpg' },
  { id: 16,  url: '../assets/images/11.jpg' },

];
