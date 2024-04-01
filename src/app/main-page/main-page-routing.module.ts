import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { InformationAboutUserComponent } from './page/information-about-user/information-about-user.component';


const routes: Routes = [

  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "all-users", component: PaginaPrincipalComponent},
      { path: "search-user", component: SearchUserComponent},
      { path: "user-info/:id", component: InformationAboutUserComponent},
      { path: "**", redirectTo: "all-users"},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
