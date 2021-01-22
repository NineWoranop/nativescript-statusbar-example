import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StatusBarService {
    private _isShow: boolean = true;

    getApp() {
        return UIApplication.sharedApplication;
    }

    hide(): void {
        this.getApp().setStatusBarHiddenWithAnimation(true, UIStatusBarAnimation.Slide);
        this._isShow = false;
    }

    show(): void {
        this.getApp().setStatusBarHiddenWithAnimation(false, UIStatusBarAnimation.Slide);
        this._isShow = true;
    }

    isShow(): boolean {
        return this._isShow;
    }
}