import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShellModule } from './modules/shell/shell.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'

import { appReducer } from './app.reducer'
import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    DashboardModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      name: 'My App',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
