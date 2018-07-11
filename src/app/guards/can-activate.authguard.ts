import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
//import { LoginService } from "../services/login/login.service";
import { Observable } from "rxjs";
import { AuthorizationService } from "src/app/services/authorization-service/authorization.service";

@Injectable()
export class CanActivateAuthGuard implements CanActivate,CanActivateChild{
    
    constructor(private router: Router,private authorizationService: AuthorizationService){
        //console.log("canActivate constructor running");
    }

    /*public canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean{
        //console.log("canActivate methhod running");
        //console.log(route);
        //console.log(state);
        const expectedRole = route.data.expectedRole;
        //console.log("Recieved expectedRole in canActivate " + expectedRole);
        if(this.authorizationService.isLogedIn()){
            if(expectedRole === this.authorizationService.getLoggedInUserRole()){
                //console.log("user is logged in and its role matches with request route, so returning true from canActivate");
                //this.authorizationService.getLoggedInUserRole();
                return true;
            }else{
               // console.log("User is logged in but its role does not matches. Redirecting to login");
                this.router.navigate(['/login']);
                return false;
            }
        }
        //console.log("User is not logged in. Redirecting to login");
        this.router.navigate(['/login']);
        return false;
    }*/

    public canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean{
        // const expectedRoles : [any] = route.data.expectedRoles;
        // //console.log("Recieved expectedRole in canActivate " + expectedRole);
        // if(this.authorizationService.isLogedIn() && expectedRoles){
        //     let loggedInUserRole = this.authorizationService.getLoggedInUserRole();
        //     let matchedRole = expectedRoles.find(role => role === loggedInUserRole);
        //     if(matchedRole){
        //         //console.log("user is logged in and its role matches with request route, so returning true from canActivate");
        //         //this.authorizationService.getLoggedInUserRole();
        //         return true;
        //     }else{
        //        // console.log("User is logged in but its role does not matches. Redirecting to login");
        //         this.router.navigate(['/home']);
        //         return false;
        //     }
        // }
        if(this.authorizationService.isLogedIn()){
            return true;
        }
        //console.log("User is not logged in. Redirecting to login");
        this.router.navigate(['/home']);
        return false;
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        //console.log("canActivateChild methhod running");
        //console.log("Calling canActivate");
        return this.canActivate(childRoute,state);
    }
}