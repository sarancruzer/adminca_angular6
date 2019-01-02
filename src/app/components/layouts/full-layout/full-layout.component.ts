import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Helpers} from "../../../helpers";

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayout implements OnInit,AfterViewInit {

  ngOnInit(): void {}

  ngAfterViewInit() {
    // initialize layout: handlers, menu ...
    Helpers.initLayout();
  }

}
