import * as application from "tns-core-modules/application";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StatusBarService {
    private _isShow: boolean = true;

    getActivity() {
        return application.android.startActivity;
    }

    hide(): void {
        this.getActivity().getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
        this._isShow = false;
    }

    show(): void {
        this.getActivity().getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_VISIBLE);
        this._isShow = true;
    }

    isShow(): boolean {
        return this._isShow;
    }
}