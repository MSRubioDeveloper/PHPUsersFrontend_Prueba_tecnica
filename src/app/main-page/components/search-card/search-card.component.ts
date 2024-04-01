import { Component, Input, OnInit } from '@angular/core';
import { UserResponse } from '../../interfaces/users-response.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'main-search-card',
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent  {

  constructor(
    private router: Router,
 
  ){}


  @Input()
  public user?: UserResponse;


  public information(): void{
    this.router.navigateByUrl(`main/user-info/${this.user?.id_empleado}`);
  }
}
