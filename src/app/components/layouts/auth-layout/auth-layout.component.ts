import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayout implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  navigate(url:any) {
    this._router.navigate([url]);
  }
}
