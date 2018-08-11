import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user.model';
import { AuthorizationService } from 'app/services/authorization-service/authorization.service';
import { SettingMenuService } from 'app/modules/setting/setting-menu.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'nal-jal-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  private componentName: string = "UpdatePasswordComponent";

  public loggedInUser: User;

  public user: any = {};

  public updating: boolean = false;

  public updated: boolean = false;

  public updateFailed: boolean = false;

  public passwordMismatch : boolean = false;

  public readonly LOGOUT_STANDBY_IN_SECONDS: number = 3;

  constructor(private authorizationService: AuthorizationService, private settingMenuService: SettingMenuService, private userService: UserService) {
    if (!this.settingMenuService.THIRD_MENU.active) {
      this.settingMenuService.menuClicked(this.settingMenuService.THIRD_MENU);
    }
  }

  ngOnInit() {
    this.resetFlags();
    this.loggedInUser = this.authorizationService.getLoggedInUser();
    if (this.loggedInUser) {
      this.user['username'] = this.loggedInUser.getUsername();
    }
  }

  updateButtonClicked() {
    console.log("updateButtonClicked() clicked updating below user");
    this.updatePassword();
  }

  private confirmPasswords(newPassword: string, confirmNewPassword: string): boolean {
    console.log("confirmPasswords called")
    if(!newPassword || !confirmNewPassword) return false;
    return newPassword === confirmNewPassword
  }

  private updatePassword() {
    if (this.confirmPasswords(this.user.password, this.user.confirmNewPassword)) {
      console.log("New Password & Confirm New Password match. Updating !");
      console.log(this.user);
      this.updating = true;
      this.resetFlags();
      this.userService.updatePassword(this.user, false).subscribe(result => {
        if (result) {
          console.log("password updated successfully");
          this.updating = false;
          this.updated = true;
          this.passwordMismatch = false;
          this.logout();
        }
      }, error => {
        console.log("Error while updating user password");
        console.log(error);
        this.updating = false;
        this.updated = false;
        this.passwordMismatch = false;
        this.updateFailed = true;
      });
    } else {
      console.log("New Password & Confirm New Password does not match !!!");
      this.resetFlags();
      this.passwordMismatch = true;
    }
  }

  public resetFlags() {
    console.log("resetting flags");
    this.updateFailed = false;
    this.updated = false;
    this.passwordMismatch = false;
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
