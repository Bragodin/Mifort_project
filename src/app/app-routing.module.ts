import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './core/page/page.component';
import { EmployeesPageComponent } from './employee/employees-page/employees-page.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import {CompanySettingsComponent} from './company-setting/company-settings/company-settings.component';
import {ProjectComponent} from './projects/project/project.component';
import {ProfileComponent} from './profile-page/profile/profile.component';
import {ProjectNameComponent} from './projects/project-name/project-name.component';
import { ExportComponent } from './components/export/export.component';

import {CompanyIntegrationComponent} from './company-setting/company-integration/company-integration.component';
import {ApprovalsPageComponent} from './approvals/approvals-page/approvals-page.component';
import {ByDayComponent} from './timesheets/by-day/by-day.component';
import {ByWeekComponent} from './timesheets/by-week/by-week.component';


const itemMenu: Routes = [
  { path: 'timelog-week', component: ByWeekComponent},
  { path: 'timelog-day', component: ByDayComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'projects/:project_name', component: ProjectNameComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'employees', component: EmployeesPageComponent},
  { path: 'company-settings', component: CompanySettingsComponent},
  { path: 'company-integration', component: CompanyIntegrationComponent},
  { path: 'employees/:employee_name', component: AddEmployeeComponent},
  { path: 'export', component: ExportComponent},
  { path: 'approvals', component: ApprovalsPageComponent},
];
const routes: Routes = [
  { path: '', component: PageComponent, children: itemMenu},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
