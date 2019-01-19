import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayout, AuthLayout } from './components/layouts';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';



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
      {
        path: "signup",
        component: SignupComponent,
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

      {
        path: "users",
        children: [
          {
            path: "",
            redirectTo: "lists",
            pathMatch: "full"
          },
          {
            path: "lists",
            component: UserListComponent,
            data: { title: "Sign In" }
          },
          {
            path: "create",
            component: UserAddComponent,
            data: { title: "Sign In" }
          },
          {
            path: "edit/:id",
            component: UserEditComponent,
            data: { title: "Sign In" }
          },
        ]
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
