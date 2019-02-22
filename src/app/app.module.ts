import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedComponent } from './featured/featured.component';
import { OurAgentComponent } from './our-agent/our-agent.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { PartnersComponent } from './partners/partners.component';
import { FiltersComponent } from './filters/filters.component';
import { RecentPropertiesComponent } from './recent-properties/recent-properties.component';
import { CategoryComponent } from './category/category.component';
import { SimilarPropertiesComponent } from './similar-properties/similar-properties.component';
import { BannerInnerComponent } from './banner-inner/banner-inner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    FeaturedComponent,
    OurAgentComponent,
    OurBlogComponent,
    PartnersComponent,
    FiltersComponent,
    RecentPropertiesComponent,
    CategoryComponent,
    SimilarPropertiesComponent,
    BannerInnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
