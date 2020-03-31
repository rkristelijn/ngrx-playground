import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NavComponent } from './components/nav.component'
import { StoreModule } from '@ngrx/store'
import { shellReducer } from './shell.reducer'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('shell', shellReducer)],
  declarations: [NavComponent],
  exports: [NavComponent, CommonModule],
})
export class ShellModule {}
