import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { DashboardComponent } from './components/dashboard.component'
import { DashboardContainerComponent } from './containers/dashboard.container.component'

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, DashboardContainerComponent],
  exports: [CommonModule],
})
export class DashboardModule {}
