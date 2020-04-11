import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  {
    path: 'admin', component: BaseLayoutComponent,
    children: [


      // Dashboad
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

      {path: '**', redirectTo: 'admin'},

      // management
      { path: 'management/superadmin', component: SuperAdminComponent, data: {extraParameter: ''}},
      { path: 'management/schooladmin', component: SchoolAdminComponent, data: {extraParameter: ''}},
    ]
  },

  {
    path: '', component: UserLayoutComponent,
    children: [

    ]
  },
  // Login
  { path: 'admin/login', component: LoginAdminComponent, data: {extraParameter: ''}},
  // Sign up
  { path: 'admin/signup', component: SignUpAdminComponent, data: {extraParameter: ''}},
]

import { LoginAdminComponent } from './Admin/Pages/Login/login-admin.component';
import { SignUpAdminComponent } from './Admin/Pages/SignUp/sign-up-admin.component'

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
import { UserLayoutComponent } from './User/Layout/user-layout/user-layout.component';

// management account
import { SchoolAdminComponent } from './Admin/Pages/Components/Account/SchoolAdmin/school-admin.component';
import { SuperAdminComponent } from './Admin/Pages/Components/Account/SuperAdmin/super-admin.component';

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
