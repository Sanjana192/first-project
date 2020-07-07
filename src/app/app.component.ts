import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:one-line
  constructor(private titleService: Title, private meta: Meta){
    titleService.setTitle('First Project');
    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, true);
    meta.addTag({name: 'description', content: 'This is used for testing the Knowledge on angular'}, true);
    meta.addTag({name: 'author', content: 'Sanjana'}, true);
  }
}
