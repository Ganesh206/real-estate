import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AdminRoutingModule,adminComponents } from './admin-routing.module';
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

import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminSideNavigationComponent } from './Admin/admin-side-navigation/admin-side-navigation.component';
import { AdminFooterComponent } from './Admin/admin-footer/admin-footer.component';

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
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideNavigationComponent,
    adminComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
