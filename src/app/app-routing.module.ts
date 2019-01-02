import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayout, AuthLayout } from './components/layouts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';



const routes: Routes = [
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  {
    path: "auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
      },
      {
        path: "login",
        component: LoginComponent,
        data: { title: "Sign In" }
      },

    ]
  },

  {
    path: "",
    component: FullLayout,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" }
      },

    ]
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }
