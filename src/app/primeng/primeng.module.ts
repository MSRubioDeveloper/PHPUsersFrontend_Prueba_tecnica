import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';


import { ButtonModule } from 'primeng/button';
import { TableSkeletonLoaderComponent } from './components/table-skeleton-loader/table-skeleton-loader.component';


import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AvatarModule } from 'primeng/avatar';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    TableSkeletonLoaderComponent,

  ],
  imports: [
    CommonModule,
    ButtonModule,
    SkeletonModule
  ],
  exports: [
    TableSkeletonLoaderComponent,
    ButtonModule,
    SkeletonModule,
    InputGroupModule,
    InputGroupAddonModule,
    AvatarModule,
    SplitterModule
  ]
})
export class PrimengModule { }
