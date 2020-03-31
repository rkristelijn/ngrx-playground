import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { DashboardComponent } from './components/dashboard.component'
import { DashboardContainerComponent } from './containers/dashboard.container.component'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('dashboard', {})],
  declarations: [DashboardComponent, DashboardContainerComponent],
  exports: [CommonModule],
})
export class DashboardModule {}
