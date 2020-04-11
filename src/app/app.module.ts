import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// admin
// LAYOUT
import { BaseLayoutComponent } from './Admin/Layout/base-layout/base-layout.component';

// HEADER
import { HeaderComponent }  from './Admin/Layout/Components/header/header.component';

// PAGE TITLE
import { PageTitleComponent } from './Admin/Layout/Components/page-title/page-title.component';

// SIDEBAR
import { SidebarComponent } from './Admin/Layout/Components/sidebar/sidebar.component';

// FOOTER
import { FooterComponent } from './Admin/Layout/Components/footer/footer.component';

// DASHBOARD
import { AnalyticsComponent } from './Admin/Pages/Components/Dashboards/analytics/analytics.component';

// PAGES

// ------------------------------------------------------------------------------------------------------

// user
// LAYOUT
import { UserLayoutComponent } from './User/Layout/user-layout/user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // Admin
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

    // -------------------------------------------------------------------------------------------------

    // user
    // LAYOUT
    UserLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
