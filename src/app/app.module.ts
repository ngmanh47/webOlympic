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
// Management Account
import { SuperAdminComponent } from './Admin/Pages/Components/Account/SuperAdmin/super-admin.component';
import { LoginAdminComponent } from './Admin/Pages/Login/login-admin.component';

// ------------------------------------------------------------------------------------------------------

// user
// LAYOUT
import { UserLayoutComponent } from './User/Layout/user-layout/user-layout.component';

// HEADER
import { HeaderUserComponent }  from './User/Layout/Components/header/header-user.component';

// HERO
import { HeroUserComponent } from './User/Layout/Components/hero/hero-user.component';

// BANNER
import { BannerUserComponent }  from './User/Layout/Components/banner/banner-user.component';

// FOOTER
import { FooterUserComponent } from './User/Layout/Components/footer/footer-user.component';

// PAGES
import { HomeUserComponent } from './User/Pages/Home/home-user.component';
import { ContactUserComponent } from './User/Pages/Contact/contact-user.component';
import { SinglePostUserComponent } from './User/Pages/Single-post/single-post-user.component';
import { UserService } from './User/Shared/user.service';
import { LoginUserComponent } from './User/Pages/Login/login-user.component';
import { SignUpUserComponent } from './User/Pages/SignUp/sign-up-user.component';
import { ProfileComponent } from './User/Pages/Profile/profile.component';
import { SponsorComponent } from './User/Pages/sponsor/sponsor.component';

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

    // MANAGEMENT
    SuperAdminComponent,
    LoginAdminComponent,

    // -------------------------------------------------------------------------------------------------

    // user
    // LAYOUT
    UserLayoutComponent,

    // HEADER
    HeaderUserComponent,

    // HERO
    HeroUserComponent,

    // BANNER
    BannerUserComponent,

    // FOOTER

    FooterUserComponent,

    // PAGES
    HomeUserComponent,
    ContactUserComponent,
    SinglePostUserComponent,
    LoginUserComponent,
    SignUpUserComponent,
    ProfileComponent,
    SponsorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
