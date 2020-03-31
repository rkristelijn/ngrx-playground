import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShellModule } from './modules/shell/shell.module'

@NgModule({
  declarations: [AppComponent],
  imports: [NgbModule, BrowserModule, AppRoutingModule, ShellModule],
  providers: [ShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
