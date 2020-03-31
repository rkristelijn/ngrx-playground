import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShellModule } from './modules/shell/shell.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'
// import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    DashboardModule,
    // StoreModule.forRoot(reducer)
  ],
  providers: [ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
