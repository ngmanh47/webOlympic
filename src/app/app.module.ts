import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// LAYOUT
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';

// HEADER
import { HeaderComponent }  from './Layout/Components/header/header.component';

// PAGE TITLE
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

// SIDEBAR
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';

// FOOTER
import { FooterComponent } from './Layout/Components/footer/footer.component';

// DASHBOARD
import { AnalyticsComponent } from './Pages/Components/Dashboards/analytics/analytics.component';

// PAGES


@NgModule({
  declarations: [
    AppComponent,
    
    // LAYOUT
    BaseLayoutComponent,

    // HEADER
    HeaderComponent,

    // PAGE TITLE
    PageTitleComponent,

    // SIDEBAR
    SidebarComponent,

    // FOOTER
    FooterComponent,

    // DASHBOARD
    AnalyticsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
