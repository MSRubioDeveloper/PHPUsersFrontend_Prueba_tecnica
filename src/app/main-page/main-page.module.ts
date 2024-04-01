import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainPageRoutingModule } from './main-page-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PrimengModule } from '../primeng/primeng.module';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { InformationAboutUserComponent } from './page/information-about-user/information-about-user.component';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    MainLayoutComponent,
    SearchUserComponent,
    SearchCardComponent,
    InformationAboutUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,


    //Reactive forms module
    ReactiveFormsModule,
    //routing
    MainPageRoutingModule,
    MatPaginatorModule
    
    
  ]
})
export class MainPageModule { }
