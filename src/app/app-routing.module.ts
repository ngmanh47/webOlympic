import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { 
    path: '', component: BaseLayoutComponent,
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
    ]
  }
]

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';

// DASHBOARDS
import { AnalyticsComponent } from './Pages/Components/Dashboards/analytics/analytics.component';

// PAGES
// Registrations
import { CreateRegisComponent } from './Pages/Components/Registrations/Create/create-regis.component';
import { ListRegisComponent } from './Pages/Components/Registrations/List/list-regis.component';

// Notifications
import { CreateNoticeComponent } from './Pages/Components/Notifications/Create/create-notice.component';
import { ListNoticeComponent } from './Pages/Components/Notifications/List/list-notice.component';

// Teams
import { CreateTeamComponent } from './Pages/Components/Teams/Create/create-team.component';
import { ListTeamComponent } from './Pages/Components/Teams/List/list-team.component';

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
