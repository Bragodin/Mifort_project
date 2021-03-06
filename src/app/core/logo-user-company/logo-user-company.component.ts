import { UserService } from './user.service';
import {Component, OnInit} from '@angular/core';
import {EmployeesProfileService} from '../../profile-page/profile/employees-profile.service';
import {TableService} from '../../components/table/table.service';
import {User} from './user.model';
import {CompanySettingsService} from '../../company-setting/company-settings/company-settings.service';
import {TimelogsByDayService} from '../../timesheets/by-day/timelogs-by-day.service';
import {TimelogsByWeekService} from '../../timesheets/by-week/timelogs-by-week.service';


@Component({
  selector: 'app-logo-user-company',
  templateUrl: './logo-user-company.component.html',
  styleUrls: ['./logo-user-company.component.sass']
})
export class LogoUserCompanyComponent implements OnInit {
  photo: string;
  users: string[] = ['Polina Zaprudskaya', 'Polina Zaprudskaya (young)'];
  companies: string[];
  nameOption: string;
  companyOption: string ;
  user: User;
  name: string;

  constructor(private employeesProfileService: EmployeesProfileService,
              private tableService: TableService,
              private userService: UserService,
              private companySettingsService: CompanySettingsService,
              private timelogsByWeekService: TimelogsByWeekService,
              private timelogsByDayService: TimelogsByDayService) { }

  ngOnInit() {
    this.photo = '';
    this.nameOption = this.users[0];

    this.userService.getUser(this.users[0]).subscribe(
      user => {
        this.user = user[0];
        this.companies = this.user.companies;
        this.companyOption = this.companies[0];
        this.userService.updateCompany(this.companyOption);
        this.companySettingsService.setCompany(this.companyOption);
      });
    this.employeesProfileService.getName(this.nameOption);
    this.companySettingsService.getName(this.nameOption);
    this.timelogsByWeekService.getName(this.nameOption);
    this.timelogsByDayService.getName(this.nameOption);
    this.tableService.getNameCompany(this.companyOption);
    this.employeesProfileService.getEmployee().subscribe(
      employee => {
        this.photo = employee[0].photoUrl;
      });
  }
  changeName() {
    this.userService.getUser(this.nameOption).subscribe(
      user => {
        this.user = user[0];
        this.companies = this.user.companies;
        this.companyOption = this.companies[0];
      });
    console.log(this.nameOption);
    this.companySettingsService.setCompany(this.companyOption);
    this.employeesProfileService.getName(this.nameOption);
    this.timelogsByWeekService.getName(this.nameOption);
    this.timelogsByDayService.getName(this.nameOption);
    this.employeesProfileService.getEmployee().subscribe(
      employee => {
        this.photo = employee[0].photoUrl;
      });
  }
  changeProject() {
    console.log(this.companyOption);
    this.companySettingsService.setCompany(this.companyOption);
    this.userService.updateCompany(this.companyOption);
  }

}
