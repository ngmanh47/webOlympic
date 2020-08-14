import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  {
    path: 'admin', component: BaseLayoutComponent,
    children: [


      // Dashboard
      { path: '', component: AnalyticsComponent, data: {extraParameter: ''}},

      // Registration
      { path: 'regis/create', component: CreateRegisComponent, data: {extraParameter: ''}},
      { path: 'regis/list', component: ListRegisComponent, data: {extraParameter: ''}},

      // Notification
      { path: 'notifications/create', component: CreateNoticeComponent, data: {extraParameter: ''}},
      { path: 'notifications/list', component: ListNoticeComponent, data: {extraParameter: ''}},

      // Team
      { path: 'teams/create', component: CreateTeamComponent, data: {extraParameter: ''}},
      { path: 'teams/list', component: ListTeamComponent, data: {extraParameter: ''}},


       // management
       { path: 'management/superadmin', component: SuperAdminComponent, data: {extraParameter: ''}},
    ]
  },

  {
    path: '', component: UserLayoutComponent,
    children: [
      // Home
      { path: '', component: HomeUserComponent, data: {extraParameter: ''}},
      // Login
      { path: 'login', component: LoginUserComponent, data: {extraParameter: ''}},
      // Sign up
      { path: 'sign-up', component: SignUpUserComponent, data: {extraParameter: ''}},
      // Contact
      { path: 'contact', component: ContactUserComponent, data: {extraParameter: ''}},
      // Posts
      { path: 'posts/:id', component: SinglePostUserComponent},
      // Profile
      { path: 'profile/:id', component: ProfileComponent},
      { path: 'profile/:id/editpassword', component: EditPassWordComponent},
      { path: 'profile/:id/icpclist', component: OlympicListComponent},
      { path: 'profile/:id/olympiclist', component: OlympicList2Component},
      // Sponsor
      { path: 'sponsor', component: SponsorComponent},

    ]
  },
  // Login
  { path: 'admin/login', component: LoginAdminComponent, data: {extraParameter: ''}},

  {path: '**', redirectTo: ''},
]

// -------------------------------------------------------------------------------------------------------
// admin
import { LoginAdminComponent } from './Admin/Pages/Login/login-admin.component';

import { BaseLayoutComponent } from './Admin/Layout/base-layout/base-layout.component';

// DASHBOARDS
import { AnalyticsComponent } from './Admin/Pages/Components/Dashboards/analytics/analytics.component';

// PAGES
// Registrations
import { CreateRegisComponent } from './Admin/Pages/Components/Registrations/Create/create-regis.component';
import { ListRegisComponent } from './Admin/Pages/Components/Registrations/List/list-regis.component';

// Notifications
import { CreateNoticeComponent } from './Admin/Pages/Components/Notifications/Create/create-notice.component';
import { ListNoticeComponent } from './Admin/Pages/Components/Notifications/List/list-notice.component';

// Teams
import { CreateTeamComponent } from './Admin/Pages/Components/Teams/Create/create-team.component';
import { ListTeamComponent } from './Admin/Pages/Components/Teams/List/list-team.component';

// ---------------------------------------------------------------------------------------------------------
// user
import { LoginUserComponent } from './User/Pages/Login/login-user.component';
import { SignUpUserComponent } from './User/Pages/SignUp/sign-up-user.component'
import { UserLayoutComponent } from './User/Layout/user-layout/user-layout.component';
import { HomeUserComponent } from './User/Pages/Home/home-user.component';
import { ContactUserComponent } from './User/Pages/Contact/contact-user.component';
import { SinglePostUserComponent } from './User/Pages/Single-post/single-post-user.component';
import { ProfileComponent } from './User/Pages/Profile/profile.component';
import { EditPassWordComponent } from './User/Pages/Profile/EditPassWord/edit-password.component';
import { OlympicListComponent } from './User/Pages/Profile/OlympicList/olympic-list.component';
import { OlympicList2Component } from './User/Pages/Profile/OlympicList2/olympic-list2.component';
import { SponsorComponent } from './User/Pages/sponsor/sponsor.component';


// management account
import { SuperAdminComponent } from './Admin/Pages/Components/Account/SuperAdmin/super-admin.component';


@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
