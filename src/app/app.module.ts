import { ImageService } from './image.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadercarosalComponent } from './components/headercarosal/headercarosal.component';
import { RowheaderComponent } from './components/rowheader/rowheader.component';
import { SubdivsComponent } from './components/subdivs/subdivs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { GalaryComponent } from './components/galary/galary.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeadercarosalComponent,
    RowheaderComponent,
    SubdivsComponent,
    GalaryComponent,
    AboutUsComponent,
    HomeComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'galary', component: GalaryComponent},
      { path: 'about-us', component: AboutUsComponent}
    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
