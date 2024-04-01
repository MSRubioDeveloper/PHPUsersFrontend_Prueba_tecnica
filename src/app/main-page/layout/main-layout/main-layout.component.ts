import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  public sidebarItems = [
    { label: "Usuarios", icon: "people", url: "/main/all-users"},
    { label: "Buscar", icon: "search", url: "/main/search-user"},

  ]

}
