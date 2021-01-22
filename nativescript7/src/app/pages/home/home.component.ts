import { Component, OnInit } from "@angular/core";
import { GestureEventData } from "@nativescript/core";
import { StatusBarService } from "../../core/services";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private statusBarService: StatusBarService) { }

    ngOnInit(): void {
        this.statusBarService.show();
    }

    onDoubleTap(args: GestureEventData) {
        if (this.statusBarService.isShow()) {
            this.statusBarService.hide();
        } else {
            this.statusBarService.show();
        }
    }

}
