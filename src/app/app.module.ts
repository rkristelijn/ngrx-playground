import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShellModule } from './modules/shell/shell.module'
import { DashboardComponent } from './modules/dashboard/components/dashboard.component'
import { DashboardContainerComponent } from './modules/dashboard/dashboard.container.component'

@NgModule({
  declarations: [AppComponent, DashboardComponent, DashboardContainerComponent],
  imports: [NgbModule, BrowserModule, AppRoutingModule, ShellModule],
  providers: [ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
