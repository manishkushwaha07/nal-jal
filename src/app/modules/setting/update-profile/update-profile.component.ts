import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingMenuService } from 'app/modules/setting/setting-menu.service';
import { User } from 'app/models/user.model';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'nal-jal-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateProfileComponent implements OnInit {

  private componentName: string = "UpdateProfileComponent";

  public user;

  public updating: boolean = false;

  public updated: boolean = false;

  public updateFailed: boolean = false;

  public readonly LOGOUT_STANDBY_IN_SECONDS: number = 3;

  constructor(private authorizationService: AuthorizationService, private settingMenuService: SettingMenuService, private userService: UserService) {
    if (!this.settingMenuService.SECOND_MENU.active) {
      this.settingMenuService.menuClicked(this.settingMenuService.SECOND_MENU);
    }
  }

  ngOnInit() {
    this.resetFlags();
    this.createLocalUser();
  }

  private createLocalUser(){
    console.log("Creating local user");
    let loggedInUser = this.authorizationService.getLoggedInUser();
    this.user = Object.assign({},loggedInUser);
    console.log(loggedInUser, this.user);
    delete this.user.zone;
  }

  updateButtonClicked() {
    console.log("updateButtonClicked() clicked updating below user");
    console.log(this.user);
    this.updating = true;
    this.resetFlags();
    this.userService.update(this.user, false).subscribe(result => {
      if (result) {
        console.log("updated successfully");
        this.updating = false;
        this.updated = true;
        this.logout();
      }
    }, error => {
      console.log("Error while updating user profile");
      console.log(error);
      this.updating = false;
      this.updated = false;
      this.updateFailed = true;
    });
  }

  public resetFlags() {
    this.updateFailed = false;
    this.updated = false;
  }

  private logout() {
    console.log("logout() called");
    let logout = setInterval(() => {
      this.authorizationService.setSessionEndTime(null);
      if (logout) {
        clearInterval(logout);
      }
    }, this.LOGOUT_STANDBY_IN_SECONDS * 1000);
  }
}
