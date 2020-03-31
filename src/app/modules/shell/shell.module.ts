import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NavComponent } from './components/nav.component'

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent, CommonModule],
})
export class ShellModule {}
