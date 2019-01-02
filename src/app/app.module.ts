import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScriptLoaderService } from './_services/script-loader.service';

// Import containers
import { FullLayout, AuthLayout} from "./components/layouts";

const APP_LAYOUTS = [FullLayout, AuthLayout];


// Import components
import {
 HeaderComponent,
 FooterComponent,
 SidebarComponent
} from "./components/shared";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthModule } from './components/auth/auth.module';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';

const APP_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS,
    DashboardComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
