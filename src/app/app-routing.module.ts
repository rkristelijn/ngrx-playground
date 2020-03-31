import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardContainerComponent } from './modules/dashboard/containers/dashboard.container.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
