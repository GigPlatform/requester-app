import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerSelPage } from './worker-sel';

@NgModule({
  declarations: [
    WorkerSelPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerSelPage),
  ],
})
export class WorkerSelPageModule {}
